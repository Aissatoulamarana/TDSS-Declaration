import { CONFIG } from '../../config-global';
import { ContactView } from '../../sections/contact/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Contact us - ${CONFIG.appName}` };

export default function Page() {
  return <ContactView />;
}
