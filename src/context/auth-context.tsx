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
  login: (email: string, role: Role) => Promise<User>;
  logout: () => void;
  switchRole: (role: 'SUPER_ADMIN' | 'TENANT' | 'APPLICANT' | 'LANDLORD') => void;
  checkPermission: (permission: string) => boolean;
  hasRole: (roles: Role | Role[]) => boolean;
}

const staticTenant: User = {
  id: 'usr_tenant_alex',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  role: 'TENANT',
  avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=tenant`,
  phoneNumber: '(512) 555-0198',
  createdAt: new Date().toISOString(),
  lastLogin: new Date().toISOString(),
};

const staticApplicant: User = {
  id: 'usr_applicant_alex',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  role: 'APPLICANT',
  avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=applicant`,
  phoneNumber: '(512) 555-0198',
  createdAt: new Date().toISOString(),
  lastLogin: new Date().toISOString(),
};

const staticSuperAdmin: User = {
  id: 'usr_admin_alex',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  role: 'SUPER_ADMIN',
  avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=admin`,
  phoneNumber: '(512) 555-0198',
  createdAt: new Date().toISOString(),
  lastLogin: new Date().toISOString(),
};

const staticLandlord: User = {
  id: 'usr_landlord_alex',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  role: 'LANDLORD',
  avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=landlord`,
  phoneNumber: '(512) 555-0198',
  createdAt: new Date().toISOString(),
  lastLogin: new Date().toISOString(),
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>('static_sandbox_jwt');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Load session from storage or default to TENANT
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedRole = localStorage.getItem('sandbox_active_role');
      if (storedRole === 'APPLICANT') {
        setUser(staticApplicant);
      } else if (storedRole === 'SUPER_ADMIN') {
        setUser(staticSuperAdmin);
      } else if (storedRole === 'LANDLORD') {
        setUser(staticLandlord);
      } else {
        setUser(staticTenant);
      }
      setIsLoading(false);
    }
  }, []);

  const switchRole = (newRole: 'SUPER_ADMIN' | 'TENANT' | 'APPLICANT' | 'LANDLORD') => {
    setIsLoading(true);
    let targetUser = staticTenant;
    if (newRole === 'APPLICANT') targetUser = staticApplicant;
    else if (newRole === 'SUPER_ADMIN') targetUser = staticSuperAdmin;
    else if (newRole === 'LANDLORD') targetUser = staticLandlord;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('sandbox_active_role', newRole);
    }

    setUser(targetUser);
    setIsLoading(false);

    // Redirect to default dashboard
    const redirectPath = DEFAULT_ROLE_REDIRECTS[newRole];
    router.push(redirectPath);
  };

  const login = async (email: string, role: Role): Promise<User> => {
    return staticTenant;
  };

  const logout = () => {
    console.log('Sandbox sessions are static.');
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
        logout,
        switchRole,
        checkPermission,
        hasRole,
      }}
    >
      {children}

      {/* Floating Sandbox Pill for Dynamic Testing */}
      {!isLoading && user && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(10, 87, 227, 0.25)',
            borderRadius: '9999px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 30px rgba(10, 87, 227, 0.15)',
            zIndex: 9999,
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span style={{ fontSize: '0.725rem', fontWeight: 800, color: '#0a57e3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                backgroundColor: user.role === 'SUPER_ADMIN' ? '#0a57e3' : 'transparent',
                color: user.role === 'SUPER_ADMIN' ? '#ffffff' : '#475569',
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
                backgroundColor: user.role === 'LANDLORD' ? '#0a57e3' : 'transparent',
                color: user.role === 'LANDLORD' ? '#ffffff' : '#475569',
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
                backgroundColor: user.role === 'TENANT' ? '#0a57e3' : 'transparent',
                color: user.role === 'TENANT' ? '#ffffff' : '#475569',
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
                backgroundColor: user.role === 'APPLICANT' ? '#0a57e3' : 'transparent',
                color: user.role === 'APPLICANT' ? '#ffffff' : '#475569',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Applicant Role
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
