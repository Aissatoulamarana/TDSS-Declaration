import { CONFIG } from '../../../../config-global';
import { ScrollProgressView } from '../../../../sections/_examples/extra/scroll-progress-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Scroll progress | Components - ${CONFIG.appName}` };

export default function Page() {
  return <ScrollProgressView />;
}
