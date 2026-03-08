'use client';

import Gallery from '@/components/shared/Gallery';
import type { GalleryImage } from '@/components/shared/Gallery';

const images: GalleryImage[] = [
  {
    src: 'https://readdy.ai/api/search-image?query=precision-turned-steel-shaft-with-threads-and-grooves-cnc-lathe-product-on-clean-background&width=800&height=600&seq=turning-gal-001&orientation=landscape',
    alt: 'Точёный вал с резьбой и канавками',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=cnc-lathe-machine-in-action-metal-chips-flying-coolant-spray-close-up-industrial&width=800&height=600&seq=turning-gal-002&orientation=landscape',
    alt: 'Токарная обработка на станке ЧПУ',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=collection-of-precision-turned-metal-parts-bushings-shafts-flanges-on-table-industrial&width=800&height=600&seq=turning-gal-003&orientation=landscape',
    alt: 'Серия точёных деталей: втулки, валы, фланцы',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=close-up-cnc-turning-operation-cutting-tool-metal-workpiece-sparks-industrial-manufacturing&width=800&height=600&seq=turning-gal-004&orientation=landscape',
    alt: 'Процесс точения заготовки крупным планом',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=precision-internal-threading-operation-cnc-lathe-metal-part-close-up&width=800&height=600&seq=turning-gal-005&orientation=landscape',
    alt: 'Нарезка внутренней резьбы на ЧПУ',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=modern-cnc-turning-workshop-clean-floor-multiple-machines-bright-lighting-industrial&width=800&height=600&seq=turning-gal-006&orientation=landscape',
    alt: 'Цех токарной обработки',
  },
];

export default function TurningGallery() {
  return <Gallery images={images} layout="fullwidth" />;
}
