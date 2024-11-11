import { CONFIG } from '../../../../config-global';
import { UserCardsView } from '../../../../sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `User cards | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <UserCardsView />;
}
