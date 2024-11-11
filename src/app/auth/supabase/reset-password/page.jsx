import { CONFIG } from '../../../../config-global';
import { SupabaseResetPasswordView } from '../../../../auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseResetPasswordView />;
}
