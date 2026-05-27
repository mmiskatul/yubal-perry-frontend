'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types/auth';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: Role[];
  fallback?: React.ReactNode;
}

export const RoleGate: React.FC<RoleGateProps> = ({
  children,
  allowedRoles,
  fallback = null,
}) => {
  const { user, isLoading } = useAuth();

  // Show nothing while checking session
  if (isLoading) {
    return null;
  }

  // If user is not logged in or doesn't have the required role
  if (!user || !allowedRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
export default RoleGate;
