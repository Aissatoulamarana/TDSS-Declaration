import { CONFIG } from '../../../../config-global';
import { AlertView } from '../../../../sections/_examples/mui/alert-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Alert | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <AlertView />;
}
