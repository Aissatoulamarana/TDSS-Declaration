import { CONFIG } from '../../../../config-global';
import { SplitResetPasswordView } from '../../../../auth/view/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SplitResetPasswordView />;
}
