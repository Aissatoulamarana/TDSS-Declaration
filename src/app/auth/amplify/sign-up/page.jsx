import { CONFIG } from '../../../../config-global';
import { AmplifySignUpView } from '../../../../auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifySignUpView />;
}
