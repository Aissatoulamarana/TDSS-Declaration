import { CONFIG } from '../../../../config-global';
import { CenteredSignUpView } from '../../../../auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredSignUpView />;
}
