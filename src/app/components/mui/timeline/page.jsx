import { CONFIG } from '../../../../config-global';
import { TimelineView } from '../../../../sections/_examples/mui/timeline-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Timeline | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <TimelineView />;
}
