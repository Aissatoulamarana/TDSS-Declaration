import { CONFIG } from '../../config-global';
import { ComingSoonView } from '../../sections/coming-soon/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Coming soon - ${CONFIG.appName}` };

export default function Page() {
  return <ComingSoonView />;
}
