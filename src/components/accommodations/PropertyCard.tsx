'use client';

import React from 'react';
import { IPropertyProduct } from '@/factories/types/factory.types';
import { PropertyBadge } from './PropertyBadge';
import { PropertyGallery } from './PropertyGallery';
import { Star, MapPin, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  product: IPropertyProduct;
  onSelectProduct?: (product: IPropertyProduct) => void;
}

export function PropertyCard({ product, onSelectProduct }: PropertyCardProps) {
  const { property } = product;
  const badgeInfo = product.getPrimaryBadge();
  const secondaryDetails = product.getSecondaryDetails();
  const formattedPrice = product.getFormattedPrice();
  const actionLabel = product.getCustomActionLabel();
  const isHighValue = product.isHighValue();

  return (
    <div 
      onClick={() => onSelectProduct?.(product)}
      className="group relative palette-card p-4 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Galería de Imágenes */}
        <div className="relative">
          <PropertyGallery
            images={property.images}
            title={property.title}
            isHighValue={isHighValue}
          />

          {/* Badge Principal del Factory */}
          <div className="absolute top-3 left-3 z-10">
            <PropertyBadge
              label={badgeInfo.label}
              variant={badgeInfo.variant}
            />
          </div>
        </div>

        {/* Info & Contenido */}
        <div className="mt-3.5 px-1 space-y-2">
          
          {/* Fila 1: Ubicación & Calificación */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-[#457b9d] font-bold truncate">
              <MapPin className="w-3.5 h-3.5 text-[#e63946] shrink-0" />
              {property.location.city}, {property.location.country}
            </span>
            <div className="flex items-center gap-1 bg-[#a8dadc]/30 px-2 py-0.5 rounded-full border border-[#a8dadc] text-[#1d3557] font-black shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{property.reviews.rating.toFixed(2)}</span>
              <span className="text-[10px] text-[#457b9d] font-bold">({property.reviews.reviewCount})</span>
            </div>
          </div>

          {/* Título */}
          <h3 className="text-base font-black text-[#1d3557] group-hover:text-[#e63946] transition-colors line-clamp-1">
            {property.title}
          </h3>

          {/* Detalles Secundarios calculados por la clase de la Factory */}
          <p className="text-xs text-[#457b9d] line-clamp-1 font-bold">
            {secondaryDetails}
          </p>

          {/* Tags de Filtros Rápidos */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {property.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-[#f1faee] text-[#1d3557] border border-[#a8dadc]"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Footer de la tarjeta: Precio & CTA */}
      <div className="mt-4 pt-3 border-t-2 border-[#a8dadc]/50 flex items-center justify-between px-1">
        <div>
          <span className="text-[10px] text-[#457b9d] block font-black uppercase tracking-wider">Desde</span>
          <span className="text-base font-black text-[#1d3557]">
            {formattedPrice}
          </span>
        </div>

        <button className="btn-strawberry px-4 py-2 text-white text-xs font-black flex items-center gap-1.5">
          <span>{actionLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
