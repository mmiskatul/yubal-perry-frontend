export type Role = 'ADMIN' | 'MANAGER' | 'USER' | 'SUPPORT' | 'GUEST';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
  phoneNumber?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface SessionState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface RoleConfig {
  allowedRoutes: string[];
  permissions: string[];
  displayName: string;
  themeColor: string; // for dynamic brand colors per role
}
