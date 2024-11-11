import { CONFIG } from '../../../../config-global';
import { AmplifyVerifyView } from '../../../../auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifyVerifyView />;
}
