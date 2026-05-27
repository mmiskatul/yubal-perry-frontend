'use client';

import DashboardLayout from '@/components/common/DashboardLayout';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['ADMIN']}>{children}</DashboardLayout>;
}
