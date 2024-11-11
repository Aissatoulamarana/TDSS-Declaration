import { CONFIG } from '../../../../config-global';
import { OverviewPaiementView } from '../../../../sections/overview/paiement/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Paiement | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewPaiementView />;
}
