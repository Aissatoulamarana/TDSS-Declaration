import { CONFIG } from '../../../../config-global';
import { NavigationBarView } from '../../../../sections/_examples/extra/navigation-bar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Navigation bar | Components - ${CONFIG.appName}` };

export default function Page() {
  return <NavigationBarView />;
}
