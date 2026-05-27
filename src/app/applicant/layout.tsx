'use client';

import DashboardLayout from '@/components/common/DashboardLayout';

export default function ApplicantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['APPLICANT']}>{children}</DashboardLayout>;
}
