import { CONFIG } from '../../../../config-global';
import { CenteredSignInView } from '../../../../auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredSignInView />;
}
