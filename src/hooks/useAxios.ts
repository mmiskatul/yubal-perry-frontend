import { useState, useCallback } from 'react';
import { apiClient, CustomRequestConfig } from '@/services/api-client';
import { APIResponse } from '@/types/api';
import { AxiosError, AxiosResponse } from 'axios';

interface UseAxiosState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useAxios<T = any>() {
  const [state, setState] = useState<UseAxiosState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const request = useCallback(
    async (
      config: CustomRequestConfig
    ): Promise<AxiosResponse<APIResponse<T>>> => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const response = await apiClient(config);
        
        // Handle case where server sends success: false in 200 payload
        const apiData = response.data as unknown as APIResponse<T>;
        if (apiData && apiData.success === false) {
          throw new Error(apiData.message || 'API request failed');
        }

        setState({
          data: apiData.data,
          error: null,
          loading: false,
        });

        return response;
      } catch (err: any) {
        let errorMessage = 'An unexpected error occurred';
        
        if (err instanceof AxiosError) {
          const apiError = err.response?.data as APIResponse;
          errorMessage = apiError?.message || err.message || errorMessage;
        } else if (err instanceof Error) {
          errorMessage = err.message;
        }

        setState((prev) => ({
          ...prev,
          error: errorMessage,
          loading: false,
        }));

        throw err;
      }
    },
    []
  );

  return {
    ...state,
    execute: request,
  };
}
