import { CONFIG } from '../../../../config-global';
import { SupabaseSignInView } from '../../../../auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseSignInView />;
}
