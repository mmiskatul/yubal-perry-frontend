import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { APIResponse } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Custom Axios Request Config to allow skipping global error handling or showing loaders
 */
export interface CustomRequestConfig extends InternalAxiosRequestConfig {
  skipAuth?: boolean;
  skipGlobalErrorHandling?: boolean;
}

// Create the Axios client instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Flag to track token refreshing state to prevent infinite refresh loops
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: any) => void;
  reject: (error: any) => void;
}> = [];

// Helper to process the request queue when token is refreshed
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });
  failedQueue = [];
};

// -------------------------------------------------------------
// REQUEST INTERCEPTOR: Inject Bearer Token
// -------------------------------------------------------------
apiClient.interceptors.request.use(
  (config: CustomRequestConfig) => {
    if (config.skipAuth) {
      return config;
    }

    // Since this runs in Next.js (which has Server and Client components),
    // ensure we are on the client-side before reading from localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// -------------------------------------------------------------
// RESPONSE INTERCEPTOR: Auth Refresh and Error Interceptions
// -------------------------------------------------------------
apiClient.interceptors.response.use(
  (response) => {
    // Return standard data wrapper
    return response;
  },
  async (error: AxiosError<APIResponse>) => {
    const originalRequest = error.config as CustomRequestConfig;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    // 1. Handle 401 Unauthorized (Expired or invalid token)
    if (error.response?.status === 401 && !originalRequest.url?.includes('/auth/refresh') && !originalRequest.url?.includes('/auth/login')) {
      if (isRefreshing) {
        // If we are already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return apiClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      try {
        const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refresh_token') : null;
        
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        // Call server to refresh the JWT
        const response = await axios.post<APIResponse<{ token: string; refreshToken?: string }>>(
          `${API_BASE_URL}/auth/refresh`,
          { refreshToken },
          { headers: { 'Content-Type': 'application/json' } }
        );

        const { token, refreshToken: newRefreshToken } = response.data.data;

        if (typeof window !== 'undefined') {
          localStorage.setItem('auth_token', token);
          if (newRefreshToken) {
            localStorage.setItem('refresh_token', newRefreshToken);
          }
        }

        // Retry the original request
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${token}`;
        }
        
        processQueue(null, token);
        isRefreshing = false;
        
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh token failed -> Logout user
        processQueue(refreshError, null);
        isRefreshing = false;

        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user_data');
          
          // Only redirect if not already on the login page
          if (!window.location.pathname.startsWith('/login')) {
            window.location.href = `/login?expired=true&redirect=${encodeURIComponent(window.location.pathname)}`;
          }
        }
        return Promise.reject(refreshError);
      }
    }

    // 2. Handle 403 Forbidden (Missing permissions)
    if (error.response?.status === 403 && typeof window !== 'undefined') {
      if (!originalRequest.skipGlobalErrorHandling) {
        window.location.href = '/unauthorized';
      }
    }

    return Promise.reject(error);
  }
);
