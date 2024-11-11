import { CONFIG } from '../../../config-global';
import { OverviewAnalyticsView } from '../../../sections/overview/analytics/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Analytics | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewAnalyticsView />;
}
