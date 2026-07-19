'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, Role } from '@/types/auth';
import { DEFAULT_ROLE_REDIRECTS } from '@/config/roles';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<User>;
  signup: (name: string, email: string, password?: string) => Promise<User>;
  updateRole: (role: Role) => Promise<User>;
  logout: () => void;
  switchRole: (role: 'SUPER_ADMIN' | 'TENANT' | 'APPLICANT' | 'LANDLORD' | 'AFFILIATE') => void;
  checkPermission: (permission: string) => boolean;
  hasRole: (roles: Role | Role[]) => boolean;
}

// 5 preconfigured base user structures
const DEFAULT_DEMO_USERS: User[] = [
  {
    id: 'usr_admin_alex',
    name: 'Alex Johnson (Admin)',
    email: 'admin@tenantintegrity.com',
    role: 'SUPER_ADMIN',
    avatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=admin',
    phoneNumber: '(512) 555-0100',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'usr_landlord_alex',
    name: 'Alex Johnson (Landlord)',
    email: 'landlord@tenantintegrity.com',
    role: 'LANDLORD',
    avatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=landlord',
    phoneNumber: '(512) 555-0198',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'usr_tenant_alex',
    name: 'Alex Johnson (Tenant)',
    email: 'tenant@tenantintegrity.com',
    role: 'TENANT',
    avatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=tenant',
    phoneNumber: '(512) 555-0101',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'usr_applicant_alex',
    name: 'Alex Johnson (Applicant)',
    email: 'applicant@tenantintegrity.com',
    role: 'APPLICANT',
    avatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=applicant',
    phoneNumber: '(512) 555-0102',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'usr_affiliate_alex',
    name: 'Alex Johnson (Affiliate)',
    email: 'affiliate@tenantintegrity.com',
    role: 'AFFILIATE',
    avatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=affiliate',
    phoneNumber: '(512) 555-0103',
    createdAt: new Date().toISOString(),
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Load session from storage or default to unauthenticated
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 1. Initialize registered users database in localStorage if not exists
      const storedUsers = localStorage.getItem('sandbox_registered_users');
      if (!storedUsers) {
        localStorage.setItem('sandbox_registered_users', JSON.stringify(DEFAULT_DEMO_USERS));
      }

      // 2. Load active session
      const storedUserString = localStorage.getItem('sandbox_active_user');
      const storedToken = localStorage.getItem('sandbox_active_token');

      if (storedUserString && storedToken) {
        try {
          const loadedUser = JSON.parse(storedUserString) as User;
          setUser(loadedUser);
          setToken(storedToken);
        } catch (e) {
          console.error('Failed to parse active user session', e);
        }
      }
      setIsLoading(false);
    }
  }, []);

  const switchRole = (newRole: 'SUPER_ADMIN' | 'TENANT' | 'APPLICANT' | 'LANDLORD' | 'AFFILIATE') => {
    setIsLoading(true);
    
    if (typeof window !== 'undefined') {
      const usersStr = localStorage.getItem('sandbox_registered_users');
      const registeredUsers = usersStr ? (JSON.parse(usersStr) as User[]) : DEFAULT_DEMO_USERS;
      let targetUser = registeredUsers.find(u => u.role === newRole);
      
      if (!targetUser) {
        targetUser = DEFAULT_DEMO_USERS.find(u => u.role === newRole) || {
          id: `usr_${newRole.toLowerCase()}_mock`,
          name: `Demo ${newRole}`,
          email: `${newRole.toLowerCase()}@example.com`,
          role: newRole,
          createdAt: new Date().toISOString(),
        };
      }

      localStorage.setItem('sandbox_active_user', JSON.stringify(targetUser));
      localStorage.setItem('sandbox_active_token', 'static_sandbox_jwt');
      localStorage.setItem('sandbox_active_role', newRole);
      setUser(targetUser);
      setToken('static_sandbox_jwt');
    }

    setIsLoading(false);

    // Redirect to default dashboard
    const redirectPath = DEFAULT_ROLE_REDIRECTS[newRole];
    router.push(redirectPath);
  };

  const login = async (email: string, password?: string): Promise<User> => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const emailLower = email.toLowerCase().trim();
          const pass = password || '';

          // 1. Read role base credentials from environment variables (with standard defaults)
          const envAdminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@tenantintegrity.com';
          const envAdminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'AdminSecurePass2026!';

          const envLandlordEmail = process.env.NEXT_PUBLIC_LANDLORD_EMAIL || 'landlord@tenantintegrity.com';
          const envLandlordPass = process.env.NEXT_PUBLIC_LANDLORD_PASSWORD || 'LandlordSecurePass2026!';

          const envTenantEmail = process.env.NEXT_PUBLIC_TENANT_EMAIL || 'tenant@tenantintegrity.com';
          const envTenantPass = process.env.NEXT_PUBLIC_TENANT_PASSWORD || 'TenantSecurePass2026!';

          const envApplicantEmail = process.env.NEXT_PUBLIC_APPLICANT_EMAIL || 'applicant@tenantintegrity.com';
          const envApplicantPass = process.env.NEXT_PUBLIC_APPLICANT_PASSWORD || 'ApplicantSecurePass2026!';

          const envAffiliateEmail = process.env.NEXT_PUBLIC_AFFILIATE_EMAIL || 'affiliate@tenantintegrity.com';
          const envAffiliatePass = process.env.NEXT_PUBLIC_AFFILIATE_PASSWORD || 'AffiliateSecurePass2026!';

          let matchedUser: User | null = null;

          // Perform exact credential checking (bypass strict password check: any password matches)
          if (emailLower === envAdminEmail.toLowerCase()) {
            matchedUser = DEFAULT_DEMO_USERS.find(u => u.role === 'SUPER_ADMIN') || null;
          } else if (emailLower === envLandlordEmail.toLowerCase()) {
            matchedUser = DEFAULT_DEMO_USERS.find(u => u.role === 'LANDLORD') || null;
          } else if (emailLower === envTenantEmail.toLowerCase()) {
            matchedUser = DEFAULT_DEMO_USERS.find(u => u.role === 'TENANT') || null;
          } else if (emailLower === envApplicantEmail.toLowerCase()) {
            matchedUser = DEFAULT_DEMO_USERS.find(u => u.role === 'APPLICANT') || null;
          } else if (emailLower === envAffiliateEmail.toLowerCase()) {
            matchedUser = DEFAULT_DEMO_USERS.find(u => u.role === 'AFFILIATE') || null;
          }

          // 2. Fallback to checking the registered users database in localStorage
          if (!matchedUser) {
            const usersStr = localStorage.getItem('sandbox_registered_users');
            if (usersStr) {
              const registeredUsers = JSON.parse(usersStr) as (User & { password?: string })[];
              const found = registeredUsers.find(
                u => u.email.toLowerCase() === emailLower
              );
              if (found) {
                // strip password key from state user object for security
                const { password: _, ...userWithoutPass } = found;
                matchedUser = userWithoutPass;
              }
            }
          }

          if (matchedUser) {
            localStorage.setItem('sandbox_active_user', JSON.stringify(matchedUser));
            localStorage.setItem('sandbox_active_token', 'static_sandbox_jwt');
            localStorage.setItem('sandbox_active_role', matchedUser.role);
            
            setUser(matchedUser);
            setToken('static_sandbox_jwt');
            setIsLoading(false);
            
            // Redirect to dashboard (or select-role if they registered but didn't select role)
            if (matchedUser.role === 'GUEST') {
              router.push('/select-role');
            } else {
              const redirectPath = DEFAULT_ROLE_REDIRECTS[matchedUser.role];
              router.push(redirectPath);
            }
            resolve(matchedUser);
          } else {
            setIsLoading(false);
            reject(new Error('Invalid email or password. Please verify your credentials.'));
          }
        } else {
          setIsLoading(false);
          reject(new Error('Window context not available.'));
        }
      }, 800);
    });
  };

  const signup = async (name: string, email: string, password?: string): Promise<User> => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const usersStr = localStorage.getItem('sandbox_registered_users') || JSON.stringify(DEFAULT_DEMO_USERS);
          const registeredUsers = JSON.parse(usersStr) as User[];

          // Prevent duplicate emails
          const emailExists = registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
          if (emailExists) {
            setIsLoading(false);
            reject(new Error('An account with this email already exists.'));
            return;
          }

          // Create new user object. By default, newly registered users are GUEST
          const newUser = {
            id: `usr_guest_${Math.random().toString(36).substr(2, 9)}`,
            name,
            email,
            role: 'GUEST' as Role,
            password, // persist password for credential matching
            avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`,
            createdAt: new Date().toISOString(),
          };

          // Save to list
          const updatedUsers = [...registeredUsers, newUser];
          localStorage.setItem('sandbox_registered_users', JSON.stringify(updatedUsers));

          // Set active session
          localStorage.setItem('sandbox_active_user', JSON.stringify(newUser));
          localStorage.setItem('sandbox_active_token', 'static_sandbox_jwt');
          localStorage.setItem('sandbox_active_role', 'GUEST');

          setUser(newUser);
          setToken('static_sandbox_jwt');
          setIsLoading(false);
          
          // Direct to intermediate verification!
          router.push('/verify-email');
          resolve(newUser);
        } else {
          setIsLoading(false);
          reject(new Error('Window context not available.'));
        }
      }, 800);
    });
  };

  const updateRole = async (newRole: Role): Promise<User> => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof window !== 'undefined' && user) {
          const updatedUser: User = { ...user, role: newRole };
          
          // Update in users database in localStorage
          const usersStr = localStorage.getItem('sandbox_registered_users');
          if (usersStr) {
            const registeredUsers = JSON.parse(usersStr) as User[];
            const idx = registeredUsers.findIndex(u => u.id === user.id);
            if (idx !== -1) {
              registeredUsers[idx] = updatedUser;
              localStorage.setItem('sandbox_registered_users', JSON.stringify(registeredUsers));
            }
          }

          localStorage.setItem('sandbox_active_user', JSON.stringify(updatedUser));
          localStorage.setItem('sandbox_active_token', 'static_sandbox_jwt');
          localStorage.setItem('sandbox_active_role', newRole);
          
          setUser(updatedUser);
          setIsLoading(false);
          resolve(updatedUser);
        } else {
          setIsLoading(false);
          reject(new Error('No active session available to associate role.'));
        }
      }, 500);
    });
  };

  const logout = () => {
    setIsLoading(true);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sandbox_active_user');
      localStorage.removeItem('sandbox_active_token');
      localStorage.removeItem('sandbox_active_role');
    }
    setUser(null);
    setToken(null);
    setIsLoading(false);
    router.push('/login');
  };

  const checkPermission = (permission: string): boolean => {
    return true;
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
        signup,
        updateRole,
        logout,
        switchRole,
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
