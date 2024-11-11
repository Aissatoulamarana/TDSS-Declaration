import { CONFIG } from '../../../../config-global';
import { TourCreateView } from '../../../../sections/tour/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new tour | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <TourCreateView />;
}
