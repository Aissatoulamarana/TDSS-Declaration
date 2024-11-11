import { CONFIG } from '../../../../config-global';
import { CenteredResetPasswordView } from '../../../../auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredResetPasswordView />;
}
