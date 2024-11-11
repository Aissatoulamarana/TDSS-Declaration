import { CONFIG } from '../../config-global';
import { FaqsView } from '../../sections/faqs/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Faqs - ${CONFIG.appName}` };

export default function Page() {
  return <FaqsView />;
}
