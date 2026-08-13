'use client';

import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, X, Minus, Plus } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  guestCount: number;
  onGuestCountChange: (count: number) => void;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  guestCount,
  onGuestCountChange
}: SearchBarProps) {
  const [activeTab, setActiveTab] = useState<'destination' | 'dates' | 'guests' | null>(null);
  const [dateRange, setDateRange] = useState({ checkIn: '18 Ago', checkOut: '24 Ago' });

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 z-30">
      <div className="palette-panel p-2.5 rounded-full bg-white">
        <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-[#a8dadc]">
          
          {/* Segmento 1: Destino */}
          <div 
            onClick={() => setActiveTab(activeTab === 'destination' ? null : 'destination')}
            className={`w-full md:w-5/12 px-6 py-3 rounded-full cursor-pointer transition-all flex items-center gap-3 ${
              activeTab === 'destination' ? 'bg-[#a8dadc]/40' : 'hover:bg-[#f1faee]'
            }`}
          >
            <MapPin className="w-5 h-5 text-[#e63946] shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-black uppercase tracking-wider text-[#457b9d]">
                Dónde
              </span>
              <input
                type="text"
                placeholder="Explorar destinos (ej. Manizales, Barú)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-transparent text-sm font-bold text-[#1d3557] placeholder-[#457b9d]/60 focus:outline-none truncate"
              />
            </div>
            {searchQuery && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSearchChange('');
                }}
                className="p-1 text-[#457b9d] hover:text-[#e63946] rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Segmento 2: Fechas */}
          <div 
            onClick={() => setActiveTab(activeTab === 'dates' ? null : 'dates')}
            className={`w-full md:w-4/12 px-6 py-3 rounded-full cursor-pointer transition-all flex items-center gap-3 ${
              activeTab === 'dates' ? 'bg-[#a8dadc]/40' : 'hover:bg-[#f1faee]'
            }`}
          >
            <Calendar className="w-5 h-5 text-[#457b9d] shrink-0" />
            <div>
              <span className="block text-[10px] font-black uppercase tracking-wider text-[#457b9d]">
                Fechas
              </span>
              <span className="text-sm font-bold text-[#1d3557]">
                {dateRange.checkIn} — {dateRange.checkOut}
              </span>
            </div>
          </div>

          {/* Segmento 3: Huéspedes & Botón Lupa */}
          <div className="w-full md:w-3/12 px-4 py-2 rounded-full flex items-center justify-between gap-2">
            
            <div 
              onClick={() => setActiveTab(activeTab === 'guests' ? null : 'guests')}
              className={`flex items-center gap-3 px-3 py-1.5 rounded-full cursor-pointer transition-all flex-1 ${
                activeTab === 'guests' ? 'bg-[#a8dadc]/40' : 'hover:bg-[#f1faee]'
              }`}
            >
              <Users className="w-5 h-5 text-[#457b9d] shrink-0" />
              <div>
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#457b9d]">
                  Quién
                </span>
                <span className="text-sm font-bold text-[#1d3557]">
                  {guestCount} {guestCount === 1 ? 'huésped' : 'huéspedes'}
                </span>
              </div>
            </div>

            {/* Botón Buscar Strawberry Red */}
            <button className="w-12 h-12 rounded-full btn-strawberry flex items-center justify-center text-white shrink-0">
              <Search className="w-5 h-5" />
            </button>

          </div>

        </div>
      </div>

      {/* Popover de Huéspedes */}
      {activeTab === 'guests' && (
        <div className="absolute right-0 top-full mt-3 w-72 palette-panel p-5 rounded-3xl z-50 animate-in fade-in duration-200">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-bold text-[#1d3557]">Adultos & Niños</p>
              <p className="text-xs text-[#457b9d]">Capacidad total deseada</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                disabled={guestCount <= 1}
                onClick={() => onGuestCountChange(Math.max(1, guestCount - 1))}
                className="w-8 h-8 rounded-full btn-frosted flex items-center justify-center text-[#1d3557] disabled:opacity-30"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-extrabold text-[#1d3557] w-4 text-center">{guestCount}</span>
              <button
                onClick={() => onGuestCountChange(guestCount + 1)}
                className="w-8 h-8 rounded-full btn-frosted flex items-center justify-center text-[#1d3557]"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t-2 border-[#a8dadc] flex justify-end">
            <button 
              onClick={() => setActiveTab(null)}
              className="text-xs font-black text-[#e63946] hover:text-[#1d3557]"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
