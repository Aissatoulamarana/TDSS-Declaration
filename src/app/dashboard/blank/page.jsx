import { CONFIG } from '../../../config-global';
import { BlankView } from '../../../sections/blank/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Blank | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <BlankView />;
}
