import { CONFIG } from '../../../../config-global';
import { SupabaseVerifyView } from '../../../../auth/view/supabase';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Supabase - ${CONFIG.appName}` };

export default function Page() {
  return <SupabaseVerifyView />;
}
