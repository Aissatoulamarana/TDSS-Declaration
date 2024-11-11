import { CONFIG } from '../../../../config-global';
import { JwtSignUpView } from '../../../../auth/view/jwt';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Jwt - ${CONFIG.appName}` };

export default function Page() {
  return <JwtSignUpView />;
}
