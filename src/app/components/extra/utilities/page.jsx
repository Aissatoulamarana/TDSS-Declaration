import { CONFIG } from '../../../../config-global';
import { UtilitiesView } from '../../../../sections/_examples/extra/utilities-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Utilities | Components - ${CONFIG.appName}` };

export default function Page() {
  return <UtilitiesView />;
}
