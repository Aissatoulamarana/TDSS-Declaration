import { CONFIG } from '../../../../config-global';
import { SupabaseUpdatePasswordView } from '../../../../auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseUpdatePasswordView />;
}
