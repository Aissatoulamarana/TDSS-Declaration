import { CONFIG } from '../../../config-global';
import { OrderListView } from '../../../sections/order/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Order list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OrderListView />;
}
