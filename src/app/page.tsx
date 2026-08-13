'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Container } from '@/components/layout/Container';
import { Footer } from '@/components/layout/Footer';
import { SearchBar } from '@/components/search/SearchBar';
import { CategoryNav } from '@/components/categories/CategoryNav';
import { ListingGrid } from '@/components/accommodations/ListingGrid';
import { HostRegisterModal } from '@/components/modals/HostRegisterModal';
import { useHostModal } from '@/hooks/useHostModal';
import { useProperties } from '@/hooks/useProperties';
import { PlusCircle, Sparkles } from 'lucide-react';

export default function HomePage() {
  const { isOpen, openModal, closeModal } = useHostModal();
  const {
    filteredProducts,
    totalCount,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    guestCount,
    setGuestCount,
    addProperty
  } = useProperties();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f1faee] text-[#1d3557] selection:bg-[#e63946] selection:text-white">
      
      {/* Header Fijo */}
      <Header onOpenHostModal={openModal} />

      {/* Hero Header Section */}
      <main className="flex-grow">
        <Container>
          
          {/* Banner de Introducción */}
          <div className="pt-10 pb-4 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a8dadc]/40 border border-[#a8dadc] text-[#1d3557] text-xs font-black tracking-wide">
              <Sparkles className="w-4 h-4 text-[#e63946]" />
              <span>Alojamientos Exclusivos & Escapadas Únicas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#1d3557] tracking-tight leading-tight">
              Encuentra tu próximo refugio <br className="hidden sm:inline" />
              <span className="text-vibrant-gradient">extraordinario</span>
            </h1>

            <p className="text-sm sm:text-base text-[#457b9d] font-bold max-w-xl mx-auto">
              Explora una selección curada de cabañas, villas frente al mar, mansiones luxury y glampings únicos en todo el mundo.
            </p>
          </div>

          {/* Buscador Interactivo (SearchBar) */}
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            guestCount={guestCount}
            onGuestCountChange={setGuestCount}
          />

          {/* Barra de Navegación por Categorías */}
          <CategoryNav
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Listado de Alojamientos */}
          <ListingGrid
            products={filteredProducts}
            totalCount={totalCount}
          />

          {/* Botón CTA para Anfitriones */}
          <div className="my-14 flex justify-center">
            <button
              onClick={openModal}
              className="btn-strawberry px-8 py-4 text-white font-black text-sm flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <PlusCircle className="w-5 h-5 text-white" />
              <span>Publicar mi Propiedad en StayInn</span>
            </button>
          </div>

        </Container>
      </main>

      {/* Modal de Registro de Anfitrión */}
      <HostRegisterModal
        isOpen={isOpen}
        onClose={closeModal}
        onAddProperty={addProperty}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
