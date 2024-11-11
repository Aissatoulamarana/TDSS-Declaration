import { CONFIG } from '../../../config-global';
import { OverviewBankingView } from '../../../sections/overview/banking/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Banking | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewBankingView />;
}
