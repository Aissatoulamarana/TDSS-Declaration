import { CONFIG } from '../../../../config-global';
import { AccountView } from '../../../../sections/account/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Account settings | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <AccountView />;
}
