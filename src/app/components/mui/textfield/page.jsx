import { CONFIG } from '../../../../config-global';
import { TextfieldView } from '../../../../sections/_examples/mui/textfield-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Textfield | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <TextfieldView />;
}
