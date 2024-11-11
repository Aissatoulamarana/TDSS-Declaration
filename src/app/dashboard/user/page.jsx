import { CONFIG } from '../../../config-global';
import { UserProfileView } from '../../../sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `User profile | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <UserProfileView />;
}
