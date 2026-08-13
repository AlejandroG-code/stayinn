'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
  isHighValue?: boolean;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const activeImage = images[currentIndex] || 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] group/gallery bg-[#f1faee] border-2 border-[#a8dadc]">
      
      {/* Imagen Principal */}
      <img
        src={activeImage}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/gallery:scale-105"
        loading="lazy"
      />

      {/* Botón Favorito Strawberry Red */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 text-[#e63946] shadow-sm hover:scale-110 active:scale-90 transition-transform z-10 border border-[#a8dadc]"
        aria-label="Agregar a favoritos"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isFavorite ? 'text-[#e63946] fill-[#e63946]' : 'text-[#457b9d]'
          }`}
        />
      </button>

      {/* Controles de Navegación */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#1d3557] opacity-0 group-hover/gallery:opacity-100 hover:scale-110 transition-all z-10 shadow-sm"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#1d3557] opacity-0 group-hover/gallery:opacity-100 hover:scale-110 transition-all z-10 shadow-sm"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Puntos Indicadores */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 bg-[#f1faee]' : 'w-1.5 bg-[#f1faee]/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
