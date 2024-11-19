'use client';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { InvoiceNewEditForm } from '../declaration-new';

// ----------------------------------------------------------------------

export function DeclarationEditView({ invoice }) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Modifier"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Déclarations', href: paths.dashboard.declaration.root },
          { name: invoice?.invoiceNumber },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InvoiceNewEditForm currentInvoice={invoice} />
    </DashboardContent>
  );
}
