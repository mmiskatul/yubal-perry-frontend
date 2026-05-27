'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, Role } from '@/types/auth';
import { DEFAULT_ROLE_REDIRECTS } from '@/config/roles';
import { hasPermission, canAccessRoute } from '@/utils/role-helper';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, role: Role) => Promise<User>;
  logout: () => void;
  checkPermission: (permission: string) => boolean;
  hasRole: (roles: Role | Role[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  // Load session from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedUser = localStorage.getItem('user_data');
        const storedToken = localStorage.getItem('auth_token');

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (err) {
        console.error('Failed to parse stored auth session', err);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  // Mock-login supporting quick role switching
  const login = async (email: string, role: Role): Promise<User> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Preset mock user info based on selected role
    const mockUser: User = {
      id: `usr_${Math.random().toString(36).substring(2, 9)}`,
      name: email.split('@')[0].toUpperCase(),
      email: email,
      role: role,
      avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${role.toLowerCase()}`,
      phoneNumber: '+1 (555) 019-2834',
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    const mockToken = `mock_jwt_token_for_${role.toLowerCase()}_${Date.now()}`;

    // Store in state
    setUser(mockUser);
    setToken(mockToken);

    // Save in storage for page refreshes & Axios client usage
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('refresh_token', `mock_refresh_token_for_${role.toLowerCase()}`);
    }

    setIsLoading(false);

    // Redirect to respective dashboard
    const redirectPath = DEFAULT_ROLE_REDIRECTS[role] || '/';
    router.push(redirectPath);

    return mockUser;
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    if (typeof window !== 'undefined') {
      localStorage.removeItem('user_data');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
    }

    router.push('/login');
  };

  const checkPermission = (permission: string): boolean => {
    return hasPermission(user?.role, permission);
  };

  const hasRole = (roles: Role | Role[]): boolean => {
    if (!user) return false;
    if (Array.isArray(roles)) {
      return roles.includes(user.role);
    }
    return user.role === roles;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        checkPermission,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
