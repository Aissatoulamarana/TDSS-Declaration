import { CONFIG } from '../../../../config-global';
import { AnalyticPaiementView } from '../../../../sections/overview/analytics/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Paiements | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <AnalyticPaiementView />;
}
