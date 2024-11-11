import { CONFIG } from '../../../config-global';
import { TourListView } from '../../../sections/tour/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Tour list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <TourListView />;
}
