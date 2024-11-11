import { CONFIG } from '../../config-global';
import { MaintenanceView } from '../../sections/maintenance/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Maintenance - ${CONFIG.appName}` };

export default function Page() {
  return <MaintenanceView />;
}
