import { CONFIG } from '../../../config-global';
import { CalendarView } from '../../../sections/calendar/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Calendar | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <CalendarView />;
}
