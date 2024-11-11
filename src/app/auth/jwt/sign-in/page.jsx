import { CONFIG } from '../../../../config-global';
import { JwtSignInView } from '../../../../auth/view/jwt';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Jwt - ${CONFIG.appName}` };

export default function Page() {
  return <JwtSignInView />;
}
