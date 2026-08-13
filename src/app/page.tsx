'use client';

import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standard',
    name: '',
    email: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <nav className="border-b border-zinc-200 dark:border-zinc-900 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/30">
              S
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              StayInn
            </span>
          </div>
          <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Reserva Fácil
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="flex-1 max-w-lg w-full mx-auto px-4 py-12 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
            Haz tu Reservación
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Completa los detalles para reservar tu próxima gran experiencia.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-zinc-900/50 dark:backdrop-blur-md rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl p-6 sm:p-8 transition-all">
          {submitted ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">¡Reservación Confirmada!</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Hemos recibido tus datos con éxito.</p>
              </div>

              <div className="border-t border-b border-zinc-100 dark:border-zinc-800 py-4 my-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400">Destino/Hotel:</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{formData.destination}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-50 dark:border-zinc-900">
                  <div>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">Check-in:</span>
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{formData.checkIn}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">Check-out:</span>
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{formData.checkOut}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-50 dark:border-zinc-900">
                  <div>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">Huéspedes:</span>
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{formData.guests}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">Habitación:</span>
                    <span className="text-sm font-semibold capitalize text-zinc-800 dark:text-zinc-200">{formData.roomType}</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-zinc-50 dark:border-zinc-900">
                  <span className="text-zinc-500 dark:text-zinc-400">Huésped principal:</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{formData.name}</span>
                </div>
                <div className="flex justify-between text-sm pt-1">
                  <span className="text-zinc-500 dark:text-zinc-400">Email:</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{formData.email}</span>
                </div>
                {formData.notes && (
                  <div className="pt-2 border-t border-zinc-50 dark:border-zinc-900">
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">Notas:</span>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 italic mt-1 bg-zinc-50 dark:bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800">{formData.notes}</p>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 active:scale-[0.98] text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 font-medium transition-all text-center cursor-pointer"
              >
                Hacer otra reservación
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Destino o Hotel
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Ej. Hotel Paradiso, Cancún"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* Dates grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Check-in
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Check-out
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Guests & Room Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Huéspedes
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="roomType" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Tipo de Habitación
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                  >
                    <option value="standard">Estándar</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite Premium</option>
                  </select>
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Notas Especiales
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Ej. Cuna para bebé, check-in tardío..."
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98] text-white font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 text-sm cursor-pointer"
              >
                Confirmar Reservación
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} StayInn Inc. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
