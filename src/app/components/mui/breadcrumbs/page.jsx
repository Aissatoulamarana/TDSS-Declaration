import { CONFIG } from '../../../../config-global';
import { BreadcrumbsView } from '../../../../sections/_examples/mui/breadcrumbs-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Breadcrumbs | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <BreadcrumbsView />;
}
