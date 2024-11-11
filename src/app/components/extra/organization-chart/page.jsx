import { CONFIG } from '../../../../config-global';
import { OrganizationalChartView } from '../../../../sections/_examples/extra/organizational-chart-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Organizational chart | Components - ${CONFIG.appName}` };

export default function Page() {
  return <OrganizationalChartView />;
}
