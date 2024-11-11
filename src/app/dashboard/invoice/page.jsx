import { CONFIG } from '../../../config-global';
import { InvoiceListView } from '../../../sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Listes des Declarations | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <InvoiceListView />;
}
