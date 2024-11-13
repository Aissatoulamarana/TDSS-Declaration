
import { CONFIG } from 'src/config-global';

import { AnalyticsFactureView } from 'src/sections/overview/analytics/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Factures | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <AnalyticsFactureView />;
}

// ----------------------------------------------------------------------

