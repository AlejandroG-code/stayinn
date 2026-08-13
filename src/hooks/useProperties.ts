'use client';

import { useState, useMemo, useCallback } from 'react';
import { Property, AccommodationType } from '@/types/property';
import { PropertyFactory } from '@/factories/PropertyFactory';
import { IPropertyProduct } from '@/factories/types/factory.types';
import initialMockData from '@/data/mockProperties.json';

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>(initialMockData as unknown as Property[]);
  const [selectedCategory, setSelectedCategory] = useState<AccommodationType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(1);

  // Transformación reactiva utilizando el Patrón Factory
  const propertyProducts: IPropertyProduct[] = useMemo(() => {
    return PropertyFactory.createProductList(properties);
  }, [properties]);

  // Filtrado reactivo por categoría, búsqueda por ciudad/título y capacidad de huéspedes
  const filteredProducts = useMemo(() => {
    return propertyProducts.filter(product => {
      const prop = product.property;

      // Filtro por categoría
      const matchesCategory = selectedCategory === 'all' || prop.type === selectedCategory;

      // Filtro por término de búsqueda (ciudad, título o país)
      const queryLower = searchQuery.toLowerCase().trim();
      const matchesSearch = queryLower === '' ||
        prop.title.toLowerCase().includes(queryLower) ||
        prop.location.city.toLowerCase().includes(queryLower) ||
        prop.location.country.toLowerCase().includes(queryLower) ||
        prop.location.state.toLowerCase().includes(queryLower);

      // Filtro por capacidad de huéspedes
      const matchesGuests = prop.capacity.maxGuests >= guestCount;

      return matchesCategory && matchesSearch && matchesGuests;
    });
  }, [propertyProducts, selectedCategory, searchQuery, guestCount]);

  /**
   * Permite registrar un nuevo alojamiento dinámicamente desde el modal del anfitrión.
   * La Factory automáticamente instanciará el objeto según el tipo seleccionado.
   */
  const addProperty = useCallback((newProperty: Omit<Property, 'id' | 'reviews' | 'isAvailable'>) => {
    const fullProperty: Property = {
      ...newProperty,
      id: `prop-${Date.now().toString().slice(-4)}`,
      reviews: {
        rating: 5.0,
        reviewCount: 1
      },
      isAvailable: true
    };

    setProperties(prev => [fullProperty, ...prev]);
  }, []);

  return {
    allProducts: propertyProducts,
    filteredProducts,
    totalCount: filteredProducts.length,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    guestCount,
    setGuestCount,
    addProperty
  };
}
