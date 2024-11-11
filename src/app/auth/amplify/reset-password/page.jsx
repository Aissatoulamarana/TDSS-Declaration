import { CONFIG } from '../../../../config-global';
import { AmplifyResetPasswordView } from '../../../../auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifyResetPasswordView />;
}
