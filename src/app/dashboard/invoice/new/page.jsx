import { CONFIG } from '../../../../config-global';
import { InvoiceCreateView } from '../../../../sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Nouvelle Déclaration | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <InvoiceCreateView />;
}
