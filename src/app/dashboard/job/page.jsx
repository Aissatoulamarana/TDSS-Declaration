import { CONFIG } from '../../../config-global';
import { JobListView } from '../../../sections/job/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Job list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <JobListView />;
}
