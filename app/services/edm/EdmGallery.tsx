'use client';

import Gallery from '@/components/shared/Gallery';
import type { GalleryImage } from '@/components/shared/Gallery';

const images: GalleryImage[] = [
  {
    src: 'https://readdy.ai/api/search-image?query=wire-edm-machine-cutting-hardened-steel-part-electrical-discharge-sparks-close-up-industrial&width=800&height=600&seq=edm-gal-001&orientation=landscape',
    alt: 'Проволочная электроэрозионная резка закалённой стали',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=precision-wire-cut-edm-parts-complex-contours-metal-profiles-on-clean-background&width=800&height=600&seq=edm-gal-002&orientation=landscape',
    alt: 'Детали после электроэрозионной обработки',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=wire-edm-machine-DK7745-industrial-workshop-water-tank-cutting-process&width=800&height=600&seq=edm-gal-003&orientation=landscape',
    alt: 'Электроэрозионный станок DK7745 в процессе работы',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=close-up-wire-edm-cutting-intricate-shape-from-steel-block-sparks-water-industrial&width=800&height=600&seq=edm-gal-004&orientation=landscape',
    alt: 'Вырезание сложного контура проволочной эрозией',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=collection-of-edm-cut-precision-dies-and-molds-hardened-steel-industrial-manufacturing&width=800&height=600&seq=edm-gal-005&orientation=landscape',
    alt: 'Пресс-формы и штампы после электроэрозионной обработки',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=modern-wire-edm-workshop-multiple-machines-clean-industrial-environment-manufacturing&width=800&height=600&seq=edm-gal-006&orientation=landscape',
    alt: 'Цех электроэрозионной обработки',
  },
];

export default function EdmGallery() {
  return <Gallery images={images} layout="fullwidth" />;
}
