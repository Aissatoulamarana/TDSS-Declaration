import { CONFIG } from '../../../../config-global';
import { FirebaseSignInView } from '../../../../auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseSignInView />;
}
