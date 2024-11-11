import { CONFIG } from '../../../../config-global';
import { SplitSignInView } from '../../../../auth/view/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SplitSignInView />;
}
