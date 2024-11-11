import { CONFIG } from '../../config-global';
import { AboutView } from '../../sections/about/view';

// ----------------------------------------------------------------------

export const metadata = { title: `About us - ${CONFIG.appName}` };

export default function Page() {
  return <AboutView />;
}
