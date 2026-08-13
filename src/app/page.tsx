'use client';

import React, { useState } from 'react';

const PROPERTIES = [
  { id: 1, name: 'Villa Frente al Mar (Cancún)', price: 1850 },
  { id: 2, name: 'Cabaña Alpina (Valle de Bravo)', price: 2400 },
  { id: 3, name: 'Estudio en la Selva (Tulum)', price: 3100 },
];

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<typeof PROPERTIES[0] | null>(null);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    name: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (property: typeof PROPERTIES[0]) => {
    setSelectedProperty(property);
    setSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold text-[#FF385C]">StayInn Clone</h1>
        <p className="text-sm text-zinc-500">Reservaciones Simples</p>
      </header>

      {/* Grid of properties and form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Properties List */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Selecciona un hospedaje:</h2>
          <div className="space-y-4">
            {PROPERTIES.map((prop) => (
              <div 
                key={prop.id} 
                onClick={() => handleSelect(prop)}
                className={`p-4 border rounded-xl cursor-pointer transition-all hover:border-zinc-400 dark:hover:border-zinc-600 ${
                  selectedProperty?.id === prop.id 
                    ? 'border-[#FF385C] bg-rose-50/50 dark:bg-rose-950/20' 
                    : 'border-zinc-200 dark:border-zinc-800'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-base">{prop.name}</h3>
                    <p className="text-sm text-zinc-500">${prop.price.toLocaleString('es-MX')} MXN noche</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                    selectedProperty?.id === prop.id 
                      ? 'bg-[#FF385C] text-white' 
                      : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                  }`}>
                    {selectedProperty?.id === prop.id ? 'Seleccionado' : 'Seleccionar'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Form */}
        <div>
          {selectedProperty ? (
            <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="text-emerald-500 text-3xl font-bold">✓</div>
                  <h3 className="font-bold text-lg">¡Reservación lista!</h3>
                  <p className="text-sm text-zinc-500">
                    Has reservado <strong className="text-zinc-900 dark:text-white">{selectedProperty.name}</strong> para {formData.guests} {parseInt(formData.guests) === 1 ? 'persona' : 'personas'}.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all cursor-pointer"
                  >
                    Editar reservación
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-lg font-semibold border-b pb-2 mb-4">
                    Reserva en: <span className="text-[#FF385C]">{selectedProperty.name}</span>
                  </h2>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-zinc-500 uppercase">Llegada</label>
                      <input 
                        type="date" 
                        name="checkIn" 
                        value={formData.checkIn} 
                        onChange={handleChange} 
                        required 
                        className="w-full mt-1 p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm bg-transparent outline-none focus:border-[#FF385C]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-500 uppercase">Salida</label>
                      <input 
                        type="date" 
                        name="checkOut" 
                        value={formData.checkOut} 
                        onChange={handleChange} 
                        required 
                        className="w-full mt-1 p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm bg-transparent outline-none focus:border-[#FF385C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase">Huéspedes</label>
                    <input 
                      type="number" 
                      name="guests" 
                      min="1" 
                      value={formData.guests} 
                      onChange={handleChange} 
                      required 
                      className="w-full mt-1 p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm bg-transparent outline-none focus:border-[#FF385C]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase">Nombre</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Tu nombre" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full mt-1 p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm bg-transparent outline-none focus:border-[#FF385C] placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-2.5 bg-[#FF385C] hover:bg-[#DE1243] text-white font-semibold rounded-lg text-sm transition-all cursor-pointer mt-4"
                  >
                    Confirmar Reservación
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center text-zinc-400">
              <p>Por favor selecciona un hospedaje de la lista para comenzar a reservar.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
