import { CONFIG } from '../../config-global';
import { AuthGuard } from '../../auth/guard';
import { DashboardLayout } from '../../layouts/dashboard';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  if (CONFIG.auth.skip) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
