import { CONFIG } from '../../../../config-global';
import { MarkdownView } from '../../../../sections/_examples/extra/markdown-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Markdown | Components - ${CONFIG.appName}` };

export default function Page() {
  return <MarkdownView />;
}
