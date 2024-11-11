import { CONFIG } from '../../../../config-global';
import { UserCreateView } from '../../../../sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new user | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <UserCreateView />;
}
