import { CONFIG } from '../../../../config-global';
import { StepperView } from '../../../../sections/_examples/mui/stepper-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Stepper | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <StepperView />;
}
