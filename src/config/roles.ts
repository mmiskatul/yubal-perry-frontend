import { Role, RoleConfig } from '@/types/auth';

export const ROLES_CONFIG: Record<Role, RoleConfig> = {
  ADMIN: {
    displayName: 'System Administrator',
    themeColor: '#7c3aed', // Purple/Violet
    allowedRoutes: ['/admin', '/manager', '/user', '/support'],
    permissions: [
      'all:access',
      'users:create', 'users:read', 'users:update', 'users:delete',
      'system:config', 'system:audit',
      'reports:view', 'reports:export',
      'support:tickets', 'support:assign'
    ],
  },
  MANAGER: {
    displayName: 'Operations Manager',
    themeColor: '#0ea5e9', // Sky/Light Blue
    allowedRoutes: ['/manager', '/user', '/support'],
    permissions: [
      'users:read', 'users:update',
      'reports:view', 'reports:export',
      'support:tickets',
      'team:manage'
    ],
  },
  USER: {
    displayName: 'Applicant / Tenant',
    themeColor: '#0a57e3', // Tenant Integrity Corporate Blue
    allowedRoutes: ['/user'],
    permissions: [
      'profile:read', 'profile:update',
      'services:use',
      'tickets:create', 'tickets:read'
    ],
  },
  SUPPORT: {
    displayName: 'Support Specialist',
    themeColor: '#f59e0b', // Amber/Yellow
    allowedRoutes: ['/support', '/user'],
    permissions: [
      'users:read',
      'support:tickets', 'support:reply', 'support:resolve'
    ],
  },
  GUEST: {
    displayName: 'Visitor',
    themeColor: '#6b7280', // Gray
    allowedRoutes: ['/login', '/signup', '/unauthorized'],
    permissions: ['public:view'],
  },
};

export const DEFAULT_ROLE_REDIRECTS: Record<Role, string> = {
  ADMIN: '/admin/dashboard',
  MANAGER: '/manager/dashboard',
  USER: '/user/dashboard',
  SUPPORT: '/support/tickets',
  GUEST: '/login',
};
