

import { GuestGuard } from '../../../../auth/guard';
import { AuthSplitLayout } from '../../../../layouts/auth-split';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <GuestGuard>
      <AuthSplitLayout section={{ title: 'Bienvenue' }}>{children}</AuthSplitLayout>
    </GuestGuard>
  );
}
