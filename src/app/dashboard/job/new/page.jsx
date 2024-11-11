import { CONFIG } from '../../../../config-global';
import { JobCreateView } from '../../../../sections/job/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new job | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <JobCreateView />;
}
