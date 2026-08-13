'use client';

import React, { useState } from 'react';

// Sample properties data
const PROPERTIES = [
  {
    id: 1,
    location: 'Cancún, México',
    distance: 'A 1,240 km de distancia',
    dates: '12–17 de oct.',
    price: 1850,
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80',
    type: 'Villa frente al mar',
  },
  {
    id: 2,
    location: 'Valle de Bravo, México',
    distance: 'A 120 km de distancia',
    dates: '20–25 de sep.',
    price: 2400,
    rating: 4.88,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80',
    type: 'Cabaña en el bosque',
  },
  {
    id: 3,
    location: 'Tulum, México',
    distance: 'A 1,180 km de distancia',
    dates: '5–10 de nov.',
    price: 3100,
    rating: 4.91,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    type: 'Estudio selvático con piscina',
  },
  {
    id: 4,
    location: 'Oaxaca, México',
    distance: 'A 450 km de distancia',
    dates: '1–6 de dic.',
    price: 1250,
    rating: 4.97,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    type: 'Loft de diseño en el centro',
  },
];

const CATEGORIES = [
  { id: 'beaches', label: 'Playas', icon: '🏝️' },
  { id: 'cabins', label: 'Cabañas', icon: '🪵' },
  { id: 'views', label: 'Vistas', icon: '🏔️' },
  { id: 'pools', label: 'Piscinas', icon: '🏊' },
  { id: 'trending', label: 'Tendencia', icon: '🔥' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('beaches');
  const [selectedProperty, setSelectedProperty] = useState<typeof PROPERTIES[0] | null>(null);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setSubmitted(false);
    setFormData({
      checkIn: '',
      checkOut: '',
      guests: '1',
      name: '',
      email: '',
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans flex flex-col">
      {/* Airbnb Style Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-900 bg-white/95 dark:bg-zinc-950/95 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-[#FF385C] text-2xl">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="w-8 h-8 fill-current">
                <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533.981 7.251 13.882c.245.466.38.988.397 1.523L29 21c0 5.068-3.924 9-8.995 9-.496 0-.986-.041-1.472-.121l-.225-.04c-.381-.073-.755-.172-1.121-.295l-.187-.066V26.5c0-2.115-1.554-3.791-3.613-3.978l-.193-.008c-2.115 0-3.791 1.554-3.978 3.613l-.008.193v2.98c-1.616.63-3.328.784-4.887.426l-.225-.054C5.924 29 2 25.068 2 20c0-.853.15-1.688.441-2.464l.088-.225 7.632-14.593C11.537 1.963 12.992 1 16 1zm0 2c-1.393 0-2.148.601-3.007 2.128l-.515.945L4.85 20.655c-.247.534-.35.91-.35 1.345 0 3.86 3.01 7 6.86 7 .696 0 1.398-.109 2.14-.336l.245-.078V26.5c0-3.181 2.378-5.801 5.437-5.986l.206-.008c3.181 0 5.801 2.378 5.986 5.437l.008.206v2.072c.677.202 1.343.31 2.015.326l.242.002c3.85 0 6.86-3.14 6.86-7 0-.442-.102-.82-.357-1.378L26.68 7.423l-.115-.224C25.688 5.602 24.933 5 23.54 5H16.03l-.03-.001V3zm0 13c1.933 0 3.5 1.567 3.5 3.5S17.933 23 16 23s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm0 2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"></path>
              </svg>
            </span>
            <span className="font-bold text-xl tracking-tight text-[#FF385C] hidden sm:inline">
              stayinn
            </span>
          </div>

          {/* Search Pill */}
          <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-full py-2 px-4 shadow-sm hover:shadow-md cursor-pointer transition-all gap-3 bg-white dark:bg-zinc-900">
            <span className="text-xs sm:text-sm font-semibold px-2">En cualquier lugar</span>
            <span className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800"></span>
            <span className="text-xs sm:text-sm font-semibold px-2">Cualquier semana</span>
            <span className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800"></span>
            <span className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 px-2">¿Cuántos?</span>
            <div className="w-8 h-8 rounded-full bg-[#FF385C] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
              </svg>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold hidden md:inline hover:bg-zinc-100 dark:hover:bg-zinc-900 py-2.5 px-4 rounded-full cursor-pointer transition-all">
              Pon tu espacio en StayInn
            </span>
            <div className="flex items-center gap-3 border border-zinc-200 dark:border-zinc-800 rounded-full p-2 hover:shadow-md cursor-pointer transition-all bg-white dark:bg-zinc-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <div className="w-8 h-8 rounded-full bg-zinc-500 text-white flex items-center justify-center font-bold text-sm">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Bar */}
      <section className="border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950/50 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 overflow-x-auto scrollbar-none justify-start sm:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center gap-1.5 pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap px-1 ${
                selectedCategory === cat.id
                  ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-medium'
                  : 'border-transparent text-zinc-400 hover:text-zinc-600 hover:border-zinc-300 dark:text-zinc-500 dark:hover:text-zinc-300'
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-xs">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              onClick={() => setSelectedProperty(prop)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prop.image}
                  alt={prop.location}
                  className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
                <button className="absolute top-3 right-3 text-white/90 hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 drop-shadow-md">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>

              {/* Property Details */}
              <div className="mt-3 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{prop.location}</h3>
                  <span className="flex items-center gap-1 text-sm font-light text-zinc-800 dark:text-zinc-200">
                    ★ {prop.rating}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{prop.type}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{prop.distance}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{prop.dates}</p>
                <p className="text-sm font-semibold mt-1.5 text-zinc-900 dark:text-zinc-100">
                  ${prop.price.toLocaleString('es-MX')} MXN <span className="font-normal text-zinc-500 dark:text-zinc-400 text-xs">noche</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Reservation Modal (Airbnb Booking flow) */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
              <h2 className="font-bold text-lg">Reserva en {selectedProperty.location.split(',')[0]}</h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center space-y-4 py-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">¡Reservación Confirmada!</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 px-4">
                    Tu solicitud para <strong>{selectedProperty.location}</strong> ha sido registrada. Te enviamos un email de confirmación a <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full mt-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-white font-medium rounded-xl text-sm transition-all cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  {/* Info card of the listing inside form */}
                  <div className="flex gap-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.location}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase font-semibold">{selectedProperty.type}</span>
                      <h4 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">{selectedProperty.location}</h4>
                      <span className="font-semibold text-xs mt-1 text-zinc-900 dark:text-zinc-100">${selectedProperty.price.toLocaleString('es-MX')} MXN / noche</span>
                    </div>
                  </div>

                  {/* Dates grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="checkIn" className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">Check-in</label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-1 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-transparent text-xs focus:ring-1 focus:ring-[#FF385C] outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkOut" className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">Check-out</label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-1 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-transparent text-xs focus:ring-1 focus:ring-[#FF385C] outline-none"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">Huéspedes</label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-transparent text-xs focus:ring-1 focus:ring-[#FF385C] outline-none"
                    />
                  </div>

                  {/* Personal info */}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">Nombre del Huésped</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-transparent text-xs focus:ring-1 focus:ring-[#FF385C] outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="ejemplo@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-transparent text-xs focus:ring-1 focus:ring-[#FF385C] outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FF385C] hover:bg-[#DE1243] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-rose-500/10 cursor-pointer mt-4"
                  >
                    Reservar ahora
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Simple Airbnb Style Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap justify-center gap-3">
            <span>&copy; {new Date().getFullYear()} StayInn, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacidad</a>
            <span>·</span>
            <a href="#" className="hover:underline">Términos</a>
            <span>·</span>
            <a href="#" className="hover:underline">Mapa del sitio</a>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold cursor-pointer hover:underline flex items-center gap-1">🌐 Español (MX)</span>
            <span className="font-semibold cursor-pointer hover:underline">MXN $</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
