import { CONFIG } from '../../../../config-global';
import { PickerView } from '../../../../sections/_examples/mui/picker-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Date picker | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <PickerView />;
}
