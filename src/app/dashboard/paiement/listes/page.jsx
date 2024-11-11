import { CONFIG } from 'src/config-global';

import { OverviewPaiementView } from 'src/sections/overview/paiement/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Paiement | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewPaiementView />;
}
