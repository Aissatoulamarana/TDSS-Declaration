import { CONFIG } from '../../../../config-global';
import { SplitVerifyView } from '../../../../auth/view/auth-demo/split';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SplitVerifyView />;
}
