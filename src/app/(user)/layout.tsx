'use client';

import DashboardLayout from '@/components/common/DashboardLayout';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['ADMIN', 'MANAGER', 'SUPPORT', 'USER']}>{children}</DashboardLayout>;
}
