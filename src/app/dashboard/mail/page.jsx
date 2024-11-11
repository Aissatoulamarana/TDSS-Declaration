import { CONFIG } from '../../../config-global';
import { MailView } from '../../../sections/mail/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Mail | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <MailView />;
}
