import { CONFIG } from '../../../config-global';
import { OverviewBookingView } from '../../../sections/overview/booking/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Booking | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewBookingView />;
}
