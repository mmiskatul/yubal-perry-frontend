'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { User, Role } from '@/types/auth';
import { DEFAULT_ROLE_REDIRECTS } from '@/config/roles';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string, role?: Role) => Promise<User>;
  signup: (name: string, email: string, password?: string) => Promise<User>;
  updateRole: (role: Role) => Promise<User>;
  logout: () => void;
  switchRole: (role: 'SUPER_ADMIN' | 'TENANT' | 'APPLICANT' | 'LANDLORD' | 'AFFILIATE') => void;
  checkPermission: (permission: string) => boolean;
  hasRole: (roles: Role | Role[]) => boolean;
}

// 5 pre-configured high-fidelity demo users
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
  const pathname = usePathname();

  // Load session from storage or default to GUEST (unauthenticated)
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
          console.error('Failed to parse active sandbox user', e);
        }
      }
      setIsLoading(false);
    }
  }, []);

  const switchRole = (newRole: 'SUPER_ADMIN' | 'TENANT' | 'APPLICANT' | 'LANDLORD' | 'AFFILIATE') => {
    setIsLoading(true);
    
    // Find the pre-configured user from the database or create one on the fly
    if (typeof window !== 'undefined') {
      const usersStr = localStorage.getItem('sandbox_registered_users');
      const registeredUsers = usersStr ? (JSON.parse(usersStr) as User[]) : DEFAULT_DEMO_USERS;
      let targetUser = registeredUsers.find(u => u.role === newRole);
      
      if (!targetUser) {
        // Fallback fallback if not found in db
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

  const login = async (email: string, password?: string, role?: Role): Promise<User> => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const usersStr = localStorage.getItem('sandbox_registered_users') || JSON.stringify(DEFAULT_DEMO_USERS);
          const registeredUsers = JSON.parse(usersStr) as User[];
          
          // Search user by email (case-insensitive)
          let matchedUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

          // If a specific role is passed (for quick demo login)
          if (!matchedUser && role) {
            matchedUser = registeredUsers.find(u => u.role === role);
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
            reject(new Error('User credentials not found. Please register an account.'));
          }
        } else {
          setIsLoading(false);
          reject(new Error('Window context not available.'));
        }
      }, 600); // realistic network delay simulation
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
          const newUser: User = {
            id: `usr_guest_${Math.random().toString(36).substr(2, 9)}`,
            name,
            email,
            role: 'GUEST',
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

      {/* Floating Clearance Sandbox Pill for Dynamic Testing */}
      {!isLoading && user && user.role !== 'GUEST' && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid var(--border-color)',
            borderRadius: '9999px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 9999,
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--brand-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            clearance sandbox:
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => switchRole('SUPER_ADMIN')}
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.725rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: user.role === 'SUPER_ADMIN' ? 'var(--brand-color)' : 'transparent',
                color: user.role === 'SUPER_ADMIN' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Super Admin Role
            </button>
            <button
              onClick={() => switchRole('LANDLORD')}
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.725rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: user.role === 'LANDLORD' ? 'var(--brand-color)' : 'transparent',
                color: user.role === 'LANDLORD' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Landlord Role
            </button>
            <button
              onClick={() => switchRole('TENANT')}
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.725rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: user.role === 'TENANT' ? 'var(--brand-color)' : 'transparent',
                color: user.role === 'TENANT' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Tenant Role
            </button>
            <button
              onClick={() => switchRole('APPLICANT')}
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.725rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: user.role === 'APPLICANT' ? 'var(--brand-color)' : 'transparent',
                color: user.role === 'APPLICANT' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Applicant Role
            </button>
            <button
              onClick={() => switchRole('AFFILIATE')}
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.725rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: user.role === 'AFFILIATE' ? 'var(--brand-color)' : 'transparent',
                color: user.role === 'AFFILIATE' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Affiliate Role
            </button>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}} />
        </div>
      )}
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
