import { CONFIG } from '../../../../config-global';
import { RatingView } from '../../../../sections/_examples/mui/rating-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Rating | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <RatingView />;
}
