import { CONFIG } from '../../../../config-global';
import { CarouselView } from '../../../../sections/_examples/extra/carousel-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Carousel | Components - ${CONFIG.appName}` };

export default function Page() {
  return <CarouselView />;
}
