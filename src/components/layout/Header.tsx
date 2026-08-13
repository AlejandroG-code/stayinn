'use client';

import React from 'react';
import { Container } from './Container';
import { Home, Sparkles, User, Globe, Menu, PlusCircle, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenHostModal: () => void;
}

export function Header({ onOpenHostModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#f1faee]/95 backdrop-blur-md border-b-2 border-[#a8dadc] py-2 transition-all">
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Marca */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 rounded-2xl bg-[#e63946] flex items-center justify-center text-white shadow-md shadow-[#e63946]/30 group-hover:scale-105 transition-transform duration-300">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#1d3557] flex items-center gap-1">
                Stay<span className="text-[#e63946]">Inn</span>
                <Sparkles className="w-4 h-4 text-[#e63946] inline-block animate-pulse" />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#457b9d] font-black -mt-1">
                Luxury Accommodations
              </span>
            </div>
          </div>

          {/* Menú de navegación central */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#a8dadc]/40 p-1.5 rounded-full border border-[#a8dadc]">
            <button className="px-5 py-2 rounded-full text-xs font-black text-white btn-steel flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Explorar
            </button>
            <button className="px-5 py-2 rounded-full text-xs font-extrabold text-[#1d3557] hover:bg-[#a8dadc] transition-all">
              Experiencias
            </button>
            <button className="px-5 py-2 rounded-full text-xs font-extrabold text-[#1d3557] hover:bg-[#a8dadc] transition-all">
              Mapa Interactivo
            </button>
          </nav>

          {/* Sección de Anfitrión & Usuario */}
          <div className="flex items-center gap-3">
            
            {/* BOTÓN DESTACADO: ¿Tienes una propiedad? (Strawberry Red #e63946) */}
            <button
              onClick={onOpenHostModal}
              className="btn-strawberry px-5 py-2.5 text-white text-xs font-black flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">¿Tienes una propiedad?</span>
              <span className="sm:hidden">Publicar</span>
            </button>

            {/* Selector de idioma */}
            <button 
              aria-label="Seleccionar idioma"
              className="p-2.5 text-[#457b9d] hover:text-[#1d3557] rounded-full hover:bg-[#a8dadc]/50 transition-colors hidden lg:flex"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Menu Dropdown de usuario */}
            <div className="flex items-center gap-2 bg-white hover:bg-[#a8dadc]/30 border-2 border-[#a8dadc] p-1.5 pl-3 rounded-full cursor-pointer transition-all shadow-sm">
              <Menu className="w-4 h-4 text-[#1d3557]" />
              <div className="w-8 h-8 rounded-full bg-[#1d3557] flex items-center justify-center text-white text-xs font-bold">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>

          </div>

        </div>
      </Container>
    </header>
  );
}
