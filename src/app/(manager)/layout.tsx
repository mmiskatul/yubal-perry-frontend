'use client';

import DashboardLayout from '@/components/common/DashboardLayout';

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['ADMIN', 'MANAGER']}>{children}</DashboardLayout>;
}
