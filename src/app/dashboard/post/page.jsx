import { CONFIG } from '../../../config-global';
import { PostListView } from '../../../sections/blog/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <PostListView />;
}
