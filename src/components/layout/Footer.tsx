import React from 'react';
import { Container } from './Container';
import { Home, Globe, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#1d3557] text-[#f1faee] border-t-4 border-[#e63946] mt-20 pt-16 pb-12 text-xs font-medium">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1: Marca & Misión */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#e63946] flex items-center justify-center text-white shadow-sm">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">StayInn</span>
            </div>
            <p className="text-[#a8dadc] leading-relaxed font-bold">
              La plataforma de alquiler de alojamientos y escapadas exclusivas. Construida con arquitectura limpia y patrones de diseño modernos.
            </p>
            <div className="flex items-center gap-2 text-white font-black pt-1">
              <Award className="w-4 h-4 text-[#e63946]" />
              <span>MVP Vibrant Palette Architecture</span>
            </div>
          </div>

          {/* Columna 2: Soporte */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Asistencia y Soporte</h4>
            <ul className="space-y-2 text-[#a8dadc]">
              <li><a href="#" className="hover:text-white transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AirCover de protección</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apoyo a personas con discapacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Opciones de cancelación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reportar problema en el barrio</a></li>
            </ul>
          </div>

          {/* Columna 3: Anfitriones */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Comunidad de Anfitriones</h4>
            <ul className="space-y-2 text-[#a8dadc]">
              <li><a href="#" className="hover:text-white transition-colors">Pon tu alojamiento en StayInn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AirCover para anfitriones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recursos para anfitriones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Foro de la comunidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ser anfitrión responsable</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal & Tecnología */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Patrón & Tecnologías</h4>
            <ul className="space-y-2 text-[#a8dadc]">
              <li className="text-white font-black">• Factory Pattern (Registry)</li>
              <li className="text-white font-black">• Strawberry Red & Space Blue Theme</li>
              <li className="text-white font-black">• Next.js 16 App Router</li>
              <li className="text-white font-black">• React 19 & TypeScript</li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Privacidad</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#457b9d]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#a8dadc]">
          <p>© 2026 StayInn, Inc. Todos los derechos reservados. Prototipo MVP UI.</p>
          <div className="flex items-center gap-6 text-white font-black">
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#e63946]">
              <Globe className="w-4 h-4 text-[#a8dadc]" /> Español (CO)
            </span>
            <span className="cursor-pointer hover:text-[#e63946]">$ USD</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
