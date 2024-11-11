import { CONFIG } from '../../../config-global';
import { OverviewCourseView } from '../../../sections/overview/course/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Penalité | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewCourseView />;
}
