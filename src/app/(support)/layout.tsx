'use client';

import DashboardLayout from '@/components/common/DashboardLayout';

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['ADMIN', 'MANAGER', 'SUPPORT']}>{children}</DashboardLayout>;
}
