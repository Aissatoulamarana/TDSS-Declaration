import { CONFIG } from 'src/config-global';

import { AnalyticPaiementView } from 'src/sections/overview/analytics/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Paiements | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <AnalyticPaiementView />;
}
