'use client';



import {paths} from '../../../routes/paths';
import  {DashboardContent} from '../../../layouts/dashboard';
import { InvoiceNewEditForm } from '../invoice-new-edit-form';
import  {CustomBreadcrumbs}  from '../../../components/custom-breadcrumbs';



// ----------------------------------------------------------------------

export function InvoiceCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Nouvelle Déclarations"
        links={[
          { name: 'Tableau de bord', href: paths.dashboard.root },
          { name: 'Déclarations', href: paths.dashboard.invoice.root },
          { name: 'Nouvelle Déclaration' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InvoiceNewEditForm />
    </DashboardContent>
  );
}
