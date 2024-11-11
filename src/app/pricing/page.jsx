import { CONFIG } from '../../config-global';
import { PricingView } from '../../sections/pricing/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Pricing - ${CONFIG.appName}` };

export default function Page() {
  return <PricingView />;
}
