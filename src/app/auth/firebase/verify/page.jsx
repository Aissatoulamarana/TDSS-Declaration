import { CONFIG } from '../../../../config-global';
import { FirebaseVerifyView } from '../../../../auth/view/firebase';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Firebase - ${CONFIG.appName}` };

export default function Page() {
  return <FirebaseVerifyView />;
}
