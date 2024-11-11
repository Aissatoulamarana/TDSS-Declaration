import { CONFIG } from '../../../config-global';
import { KanbanView } from '../../../sections/kanban/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Kanban | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <KanbanView />;
}
