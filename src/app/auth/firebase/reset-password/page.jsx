import { CONFIG } from '../../../../config-global';
import { FirebaseResetPasswordView } from '../../../../auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseResetPasswordView />;
}
