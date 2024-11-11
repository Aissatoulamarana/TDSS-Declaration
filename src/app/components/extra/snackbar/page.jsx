import { CONFIG } from '../../../../config-global';
import { SnackbarView } from '../../../../sections/_examples/extra/snackbar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Snackbar | Components - ${CONFIG.appName}` };

export default function Page() {
  return <SnackbarView />;
}
