import { Role, RoleConfig } from '@/types/auth';

export const ROLES_CONFIG: Record<Role, RoleConfig> = {
  SUPER_ADMIN: {
    displayName: 'Super Admin',
    themeColor: '#0a57e3', // Tenant Integrity Corporate Blue
    allowedRoutes: ['/admin'],
    permissions: ['all:access'],
  },
  TENANT: {
    displayName: 'Tenant',
    themeColor: '#0a57e3', // Tenant Integrity Corporate Blue
    allowedRoutes: ['/tenant'],
    permissions: [
      'profile:read', 'profile:update',
      'services:use',
      'tickets:create', 'tickets:read'
    ],
  },
  LANDLORD: {
    displayName: 'Landlord',
    themeColor: '#0a57e3', // Tenant Integrity Corporate Blue
    allowedRoutes: ['/landlord'],
    permissions: [
      'profile:read', 'profile:update',
      'properties:manage',
      'tenants:observe', 'tenants:read'
    ],
  },
  APPLICANT: {
    displayName: 'Applicant',
    themeColor: '#0a57e3', // Tenant Integrity Corporate Blue
    allowedRoutes: ['/applicant'],
    permissions: [
      'profile:read', 'profile:update',
      'services:use',
      'tickets:create', 'tickets:read'
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
  SUPER_ADMIN: '/admin/overview',
  TENANT: '/tenant/dashboard',
  APPLICANT: '/applicant/progress',
  LANDLORD: '/landlord/overview',
  GUEST: '/login',
};
