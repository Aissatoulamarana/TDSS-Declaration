import { CONFIG } from '../../../../config-global';
import { SplitSignUpView } from '../../../../auth/view/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SplitSignUpView />;
}
