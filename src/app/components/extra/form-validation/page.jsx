import { CONFIG } from '../../../../config-global';
import { FormValidationView } from '../../../../sections/_examples/extra/form-validation-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Form validation | Components - ${CONFIG.appName}` };

export default function Page() {
  return <FormValidationView />;
}
