'use client';

import React from 'react';
import { IPropertyProduct } from '@/factories/types/factory.types';
import { PropertyCard } from './PropertyCard';
import { Sparkles, Building2 } from 'lucide-react';

interface ListingGridProps {
  products: IPropertyProduct[];
  totalCount: number;
}

export function ListingGrid({ products, totalCount }: ListingGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full my-12 p-12 palette-panel rounded-3xl text-center flex flex-col items-center justify-center gap-4 max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#f1faee] flex items-center justify-center text-[#e63946] border-2 border-[#a8dadc]">
          <Building2 className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-black text-[#1d3557]">No se encontraron alojamientos</h3>
          <p className="text-sm text-[#457b9d] font-bold mt-1">
            Intenta cambiar los filtros de búsqueda o seleccionar otra categoría para descubrir lugares increíbles.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full my-6">
      
      {/* Encabezado del Listado */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#e63946]" />
          <h2 className="text-xl font-black text-[#1d3557] tracking-tight">
            Alojamientos Disponibles
          </h2>
          <span className="ml-2 px-3 py-0.5 rounded-full bg-[#a8dadc]/40 text-[#1d3557] text-xs font-black border border-[#a8dadc]">
            {totalCount} {totalCount === 1 ? 'lugar' : 'lugares'}
          </span>
        </div>

        <span className="text-xs text-[#457b9d] font-bold hidden sm:inline-block">
          Instanciados mediante <strong className="text-[#e63946] font-black">Factory Pattern</strong>
        </span>
      </div>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <PropertyCard
            key={product.property.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
