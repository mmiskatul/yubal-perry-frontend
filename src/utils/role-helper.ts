import { Role } from '@/types/auth';
import { ROLES_CONFIG } from '@/config/roles';

/**
 * Checks if a role has a specific permission
 */
export function hasPermission(role: Role | undefined, permission: string): boolean {
  if (!role) return false;
  const config = ROLES_CONFIG[role];
  if (!config) return false;

  // Admin gets wildcard bypass
  if (config.permissions.includes('all:access')) {
    return true;
  }

  return config.permissions.includes(permission);
}

/**
 * Checks if a role is authorized to access a given URL path
 */
export function canAccessRoute(role: Role | undefined, path: string): boolean {
  if (!role) return false;
  const config = ROLES_CONFIG[role];
  if (!config) return false;

  // Guest and onboarding paths are always accessible
  if (['/login', '/signup', '/onboarding', '/unauthorized', '/'].includes(path)) {
    return true;
  }

  // Check if any of the role's allowed routes is a prefix of the requested path
  return config.allowedRoutes.some((route) => path.startsWith(route));
}

/**
 * Returns whether user's role is at least equal to or higher than another role in hierarchy
 * USER > GUEST
 */
export function compareRoles(roleA: Role, roleB: Role): number {
  const hierarchy: Record<Role, number> = {
    SUPER_ADMIN: 5,
    LANDLORD: 4,
    TENANT: 3,
    APPLICANT: 2,
    AFFILIATE: 1,
    GUEST: 0,
  };

  return (hierarchy[roleA] || 0) - (hierarchy[roleB] || 0);
}
