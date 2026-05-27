'use client';

import DashboardLayout from '@/components/common/DashboardLayout';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['TENANT']}>{children}</DashboardLayout>;
}
