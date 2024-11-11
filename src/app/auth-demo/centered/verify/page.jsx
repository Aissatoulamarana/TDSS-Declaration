import { CONFIG } from '../../../../config-global';
import { CenteredVerifyView } from '../../../../auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredVerifyView />;
}
