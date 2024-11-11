import { CONFIG } from '../../../../config-global';
import { PaginationView } from '../../../../sections/_examples/mui/pagination-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Pagination | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <PaginationView />;
}
