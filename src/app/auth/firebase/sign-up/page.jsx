import { CONFIG } from '../../../../config-global';
import { FirebaseSignUpView } from '../../../../auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseSignUpView />;
}
