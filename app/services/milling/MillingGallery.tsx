'use client';

import Gallery from '@/components/shared/Gallery';
import type { GalleryImage } from '@/components/shared/Gallery';

const images: GalleryImage[] = [
  {
    src: 'https://readdy.ai/api/search-image?query=precision-cnc-milled-aluminum-part-complex-geometry-pockets-and-ribs-on-clean-background&width=800&height=600&seq=milling-gal-001&orientation=landscape',
    alt: 'Фрезерованная алюминиевая деталь со сложной геометрией',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=cnc-vertical-milling-machine-in-action-end-mill-cutting-steel-coolant-spray-industrial&width=800&height=600&seq=milling-gal-002&orientation=landscape',
    alt: 'Фрезерование стальной заготовки на ЧПУ',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=collection-of-precision-milled-metal-parts-housings-brackets-plates-industrial-manufacturing&width=800&height=600&seq=milling-gal-003&orientation=landscape',
    alt: 'Серия фрезерованных деталей: корпуса, кронштейны, пластины',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=close-up-cnc-milling-operation-face-mill-cutting-metal-block-chips-flying-industrial&width=800&height=600&seq=milling-gal-004&orientation=landscape',
    alt: 'Торцевое фрезерование заготовки крупным планом',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=complex-milled-steel-component-with-threads-holes-and-chamfers-precision-manufacturing&width=800&height=600&seq=milling-gal-005&orientation=landscape',
    alt: 'Сложная фрезерованная деталь с резьбами и фасками',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=modern-cnc-milling-workshop-vertical-machining-centers-clean-industrial-environment&width=800&height=600&seq=milling-gal-006&orientation=landscape',
    alt: 'Цех фрезерной обработки',
  },
];

export default function MillingGallery() {
  return <Gallery images={images} layout="fullwidth" />;
}
