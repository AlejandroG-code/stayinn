'use client';

import React, { useState } from 'react';
import { Property, AccommodationType, PropertyTag } from '@/types/property';
import { X, Building, DollarSign, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';

interface HostRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProperty: (property: Omit<Property, 'id' | 'reviews' | 'isAvailable'>) => void;
}

export function HostRegisterModal({ isOpen, onClose, onAddProperty }: HostRegisterModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    type: 'cabin' as AccommodationType,
    pricePerNight: 150,
    currency: 'USD',
    city: '',
    state: '',
    country: 'Colombia',
    address: '',
    imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    tags: ['Superhost', 'Pet Friendly'] as PropertyTag[]
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.city) return;

    onAddProperty({
      title: formData.title,
      subtitle: formData.subtitle || 'Alojamiento exclusivo recién publicado por anfitrión',
      description: formData.description || 'Increíble propiedad con comodidades de lujo.',
      type: formData.type,
      pricePerNight: Number(formData.pricePerNight),
      currency: formData.currency,
      location: {
        address: formData.address || 'Sector Principal',
        city: formData.city,
        state: formData.state || 'Región Central',
        country: formData.country,
        latitude: 4.5,
        longitude: -74.1
      },
      images: [
        formData.imageUrl || 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80'
      ],
      tags: formData.tags,
      amenities: ['Wi-Fi High-Speed', 'Estacionamiento', 'Cocina equipada'],
      capacity: {
        maxGuests: Number(formData.maxGuests),
        bedrooms: Number(formData.bedrooms),
        beds: Number(formData.beds),
        bathrooms: Number(formData.bathrooms)
      }
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1d3557]/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl palette-panel p-0 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col bg-white">
        
        {/* Header del Modal */}
        <div className="px-6 py-5 border-b-2 border-[#a8dadc] flex items-center justify-between bg-[#f1faee]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e63946] flex items-center justify-center text-white">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#1d3557] flex items-center gap-1.5">
                Registra tu Propiedad
                <Sparkles className="w-4 h-4 text-[#e63946]" />
              </h3>
              <p className="text-xs text-[#457b9d] font-bold">Publicación simulada para anfitriones</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#457b9d] hover:text-[#e63946] rounded-full hover:bg-[#a8dadc]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mensaje de Éxito */}
        {isSuccess ? (
          <div className="p-12 text-center flex flex-col items-center justify-center gap-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-[#f1faee] text-[#2a9d8f] border-2 border-[#2a9d8f] flex items-center justify-center animate-bounce shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-black text-[#1d3557]">¡Alojamiento Publicado!</h4>
              <p className="text-sm text-[#457b9d] font-bold mt-1">
                La <strong className="text-[#e63946]">PropertyFactory</strong> ha instanciado correctamente tu propiedad en el Grid.
              </p>
            </div>
          </div>
        ) : (
          /* Formulario */
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 custom-scrollbar">
            
            {/* Título de la propiedad */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#457b9d] mb-1">
                Título del Alojamiento *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Cabaña de Cristal en el Bosque"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl palette-input text-sm font-bold text-[#1d3557] placeholder-[#457b9d]/60"
              />
            </div>

            {/* Tipo de propiedad & Precio por noche */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  Tipo de Alojamiento
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as AccommodationType })}
                  className="w-full px-4 py-2.5 rounded-xl palette-input text-sm font-bold text-[#1d3557]"
                >
                  <option value="cabin">🌲 Cabaña & Bosque</option>
                  <option value="beach">🏖️ Frente al Mar</option>
                  <option value="mansion">👑 Mansión Luxury</option>
                  <option value="urban">🏙️ Departamento Urbano</option>
                  <option value="glamping">⛺ Glamping Starlight</option>
                  <option value="treehouse">🪵 Casa del Árbol Eco</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  Precio por Noche (USD) *
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-[#457b9d] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    required
                    min={10}
                    value={formData.pricePerNight}
                    onChange={(e) => setFormData({ ...formData, pricePerNight: Number(e.target.value) })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl palette-input text-sm font-bold text-[#1d3557]"
                  />
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  Ciudad *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Medellín, Cartagena, Villa de Leyva"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl palette-input text-sm font-bold text-[#1d3557] placeholder-[#457b9d]/60"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  País
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl palette-input text-sm font-bold text-[#1d3557]"
                />
              </div>
            </div>

            {/* URL Imagen Principal */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#457b9d] mb-1">
                URL de Imagen de Portada (Unsplash u otro)
              </label>
              <div className="relative">
                <ImageIcon className="w-4 h-4 text-[#457b9d] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl palette-input text-sm font-bold text-[#1d3557] placeholder-[#457b9d]/60"
                />
              </div>
            </div>

            {/* Capacidad */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  Huéspedes
                </label>
                <input
                  type="number"
                  min={1}
                  value={formData.maxGuests}
                  onChange={(e) => setFormData({ ...formData, maxGuests: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl palette-input text-xs text-[#1d3557] text-center font-bold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  Habitaciones
                </label>
                <input
                  type="number"
                  min={1}
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl palette-input text-xs text-[#1d3557] text-center font-bold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  Camas
                </label>
                <input
                  type="number"
                  min={1}
                  value={formData.beds}
                  onChange={(e) => setFormData({ ...formData, beds: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl palette-input text-xs text-[#1d3557] text-center font-bold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#457b9d] mb-1">
                  Baños
                </label>
                <input
                  type="number"
                  min={1}
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({ ...formData, bathrooms: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl palette-input text-xs text-[#1d3557] text-center font-bold"
                />
              </div>
            </div>

            {/* Footer de Acciones del Modal */}
            <div className="pt-4 border-t-2 border-[#a8dadc] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-black text-[#457b9d] hover:text-[#e63946] transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-strawberry px-6 py-2.5 text-white text-xs font-black"
              >
                Publicar Propiedad
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
