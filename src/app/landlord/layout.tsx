'use client';

import DashboardLayout from '@/components/common/DashboardLayout';

export default function LandlordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['LANDLORD']}>{children}</DashboardLayout>;
}
