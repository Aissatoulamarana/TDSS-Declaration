import { CONFIG } from '../../../../config-global';
import { ScrollbarView } from '../../../../sections/_examples/extra/scrollbar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Scrollbar | Components - ${CONFIG.appName}` };

export default function Page() {
  return <ScrollbarView />;
}
