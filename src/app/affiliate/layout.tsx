'use client';

import React from 'react';
import DashboardLayout from '@/components/common/DashboardLayout';

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout allowedRoles={['AFFILIATE']}>{children}</DashboardLayout>;
}
