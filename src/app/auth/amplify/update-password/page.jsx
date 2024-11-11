import { CONFIG } from '../../../../config-global';
import { AmplifyUpdatePasswordView } from '../../../../auth/view/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Amplify - ${CONFIG.appName}` };

export default function Page() {
  return <AmplifyUpdatePasswordView />;
}
