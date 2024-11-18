import { CONFIG } from 'src/config-global';

import { JwtSignInView } from 'src/auth/view/jwt';

// ----------------------------------------------------------------------

export const metadata = { title: `Connexion | Jwt - ${CONFIG.appName}` };

export default function Page() {
  return <JwtSignInView />;
}
