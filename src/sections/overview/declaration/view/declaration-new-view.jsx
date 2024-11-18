'use client';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { InvoiceNewEditForm } from '../declaration-new';

// ----------------------------------------------------------------------

export function DeclarationNewView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Nouvelle Déclarations"
        links={[
          { name: 'Tableau de bord', href: paths.dashboard.root },
          { name: 'Déclarations', href: paths.dashboard.declaration.root },
          { name: 'Nouvelle Déclaration' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InvoiceNewEditForm />
    </DashboardContent>
  );
}
