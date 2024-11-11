import { CONFIG } from '../../../../config-global';
import { SupabaseSignUpView } from '../../../../auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseSignUpView />;
}
