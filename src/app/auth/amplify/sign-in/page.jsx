import { CONFIG } from '../../../../config-global';
import { AmplifySignInView } from '../../../../auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifySignInView />;
}
