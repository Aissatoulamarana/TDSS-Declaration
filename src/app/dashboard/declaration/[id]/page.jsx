import { CONFIG } from 'src/config-global';
import { _invoices } from 'src/_mock/_invoice';

import { DeclarationDetailsView } from 'src/sections/overview/declaration/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Déclaration details | Dashboard - ${CONFIG.appName}` };

export default function Page({ params }) {
  const { id } = params;

  const currentInvoice = _invoices.find((invoice) => invoice.id === id);

  return <DeclarationDetailsView invoice={currentInvoice} />;
}

// ----------------------------------------------------------------------

/**
 * [1] Default
 * Remove [1] and [2] if not using [2]
 */
const dynamic = CONFIG.isStaticExport ? 'auto' : 'force-dynamic';

export { dynamic };

/**
 * [2] Static exports
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
export async function generateStaticParams() {
  if (CONFIG.isStaticExport) {
    return _invoices.map((invoice) => ({ id: invoice.id }));
  }
  return [];
}
