'use client';

import { useState } from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  desc?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  layout?: 'fullwidth' | 'sidebyside';
}

export default function Gallery({ images, layout = 'fullwidth' }: GalleryProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  if (layout === 'sidebyside') {
    return (
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="relative">
          <div className="w-full h-[380px] rounded-xl overflow-hidden bg-gray-100">
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
            aria-label="Предыдущее"
          >
            <i className="ri-arrow-left-s-line text-xl text-gray-900" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
            aria-label="Следующее"
          >
            <i className="ri-arrow-right-s-line text-xl text-gray-900" />
          </button>
        </div>

        <div className="flex flex-col justify-center">
          {images[current].title && (
            <h3 className="text-xl font-bold text-gray-900 mb-3">{images[current].title}</h3>
          )}
          {images[current].desc && (
            <p className="text-gray-600 leading-relaxed text-sm">{images[current].desc}</p>
          )}
          <div className="flex gap-2 mt-6 flex-wrap">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-16 h-16 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                  i === current ? 'ring-2 ring-brand opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full h-[460px] rounded-xl overflow-hidden shadow-lg mb-4">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-full object-cover object-top transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-5 left-6 text-white">
          <p className="text-base font-semibold">{images[current].alt}</p>
          <p className="text-sm text-white/70">
            {current + 1} / {images.length}
          </p>
        </div>
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-colors"
          aria-label="Предыдущее"
        >
          <i className="ri-arrow-left-s-line text-2xl" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-colors"
          aria-label="Следующее"
        >
          <i className="ri-arrow-right-s-line text-2xl" />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative h-20 rounded-lg overflow-hidden transition-all ${
              i === current ? 'opacity-100' : 'opacity-55 hover:opacity-80'
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-top" />
            {i === current && (
              <div className="absolute inset-0 border-2 border-brand rounded-lg" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
