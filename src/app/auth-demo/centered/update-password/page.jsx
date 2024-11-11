import { CONFIG } from '../../../../config-global';
import { CenteredUpdatePasswordView } from '../../../../auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredUpdatePasswordView />;
}
