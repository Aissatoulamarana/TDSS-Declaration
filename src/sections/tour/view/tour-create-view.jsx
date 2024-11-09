'use client';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { TourNewEditForm } from '../tour-new-edit-form';

// ----------------------------------------------------------------------

export function TourCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Creer une nouvelle entreprise"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Entreprise', href: paths.dashboard.user.root },
          { name: 'Nouvelle' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <TourNewEditForm />
    </DashboardContent>
  );
}
