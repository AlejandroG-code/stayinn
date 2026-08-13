# StayInn - Plataforma de Alojamientos (MVP UI)

Plataforma modular y extensible de alquiler de alojamientos y reservaciones desarrollada con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS v4**, implementando el patrón de diseño **Factory (Factory Pattern)** para la instanciación dinámica de componentes y objetos de alojamientos.

---

## 📋 Entregables de la Planeación Técnica

1. **[Stack Tecnológico e Infraestructura Frontend](#1-stack-tecnológico-e-infraestructura-frontend)**
2. **[Estructura de Archivos del Proyecto](#2-estructura-de-archivos-del-proyecto)**
3. **[Modelo de Datos y Esquema JSON](#3-modelo-de-datos-y-esquema-json)**
4. **[Implementación del Patrón de Diseño (Factory Pattern)](#4-implementación-del-patrón-de-diseño-factory-pattern)**
5. **[Desglose de Componentes UI/UX](#5-desglose-de-componentes-uiux)**
6. **[Roadmap de Desarrollo (Sprint Plan para MVP)](#6-roadmap-de-desarrollo-sprint-plan-para-mvp)**

---

## 1. Stack Tecnológico e Infraestructura Frontend

| Capa | Tecnología | Justificación Técnica |
| :--- | :--- | :--- |
| **Framework Base** | **Next.js 16 (App Router)** | Renderizado híbrido (SSR/Client Components), soporte nativo TypeScript y optimización automática de imágenes con `<Image />`. |
| **Lógica & UI Library** | **React 19** | Manejo de estado reactivo, componentes desacoplados y hooks modernos (`useActionState`, `useOptimistic`). |
| **Lenguaje** | **TypeScript 5.x** | Tipado estático estricto para garantizar contratos de datos en el modelo `Property` y las interfaces de la Factory. |
| **Estilos & Diseño** | **Tailwind CSS v4 + Design Tokens** | Desarrollo rápido de UI responsiva, glassmorphism, gradientes HSL y micro-animaciones fluidas. |
| **Iconografía** | **Lucide React** | Librería ligera de iconos con soporte tree-shaking nativo. |
| **Manejo de Estado Local** | **React Context API / Custom Hooks** | Gestión de estado ligera para filtros de búsqueda y modal de anfitriones. |

---

## 2. Estructura de Archivos del Proyecto

```structure
stayinn/
├── public/
│   └── images/                 # Assets estáticos y fallback images
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Design tokens, gradientes y animaciones
│   │   ├── layout.tsx          # Root Layout (Header, Main, Footer, Providers)
│   │   └── page.tsx            # Home Page (Main Dashboard & Property Grid)
│   ├── components/             # Componentes UI de Presentación
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Logo, Nav, User Menu & Host CTA ("¿Tienes una propiedad?")
│   │   │   ├── Footer.tsx      # Pie de página multinivel
│   │   │   └── Container.tsx   # Envoltorio de layout responsivo
│   │   ├── search/
│   │   │   ├── SearchBar.tsx   # Buscador principal flotante estilo Glassmorphism
│   │   │   ├── DestinationPicker.tsx
│   │   │   ├── DatePicker.tsx
│   │   │   └── GuestPicker.tsx
│   │   ├── categories/
│   │   │   ├── CategoryNav.tsx # Barra horizontal scrolleable de categorías
│   │   │   └── CategoryItem.tsx
│   │   ├── accommodations/
│   │   │   ├── ListingGrid.tsx # Grid de renderizado dinámico mediante Factory
│   │   │   ├── PropertyCard.tsx# Componente base de tarjeta de alojamiento
│   │   │   ├── PropertyBadge.tsx# Chips/Tags dinámicos (Superhost, Frente al mar, etc.)
│   │   │   └── PropertyGallery.tsx # Galería de imágenes
│   │   └── modals/
│   │       ├── HostRegisterModal.tsx # Formulario modal para registro de anfitriones
│   │       └── BaseModal.tsx   # Modal genérico reutilizable con backdrop blur
│   ├── data/
│   │   ├── mockProperties.json # Mock Data estructurada con diferentes tipos de propiedades
│   │   └── categoriesData.ts   # Configuración de categorías
│   ├── factories/              # IMPLEMENTACIÓN DEL PATRÓN FACTORY
│   │   ├── types/
│   │   │   └── factory.types.ts# Interfaces del Factory y Productos
│   │   ├── products/           # Productos de alojamiento concretos
│   │   │   ├── CabinPropertyProduct.ts
│   │   │   ├── BeachPropertyProduct.ts
│   │   │   ├── MansionPropertyProduct.ts
│   │   │   ├── UrbanPropertyProduct.ts
│   │   │   └── BasePropertyProduct.ts
│   │   └── PropertyFactory.ts  # Clase principal Factory con Registro Dinámico
│   ├── hooks/
│   │   ├── useProperties.ts    # Hook consumidor de la Factory
│   │   ├── useHostModal.ts     # Hook para apertura/cierre de modal
│   │   └── usePropertyFilter.ts# Hook para filtrado rápido por categoría y búsqueda
│   └── types/
│       ├── property.ts         # Contrato principal de la entidad Property
│       ├── search.ts           # Filtros de búsqueda
│       └── host.ts             # Formulario de anfitrión
```

---

## 3. Modelo de Datos y Esquema JSON

### Interfaces TypeScript (`src/types/property.ts`)

```typescript
export type AccommodationType = 
  | 'cabin' 
  | 'beach' 
  | 'mansion' 
  | 'urban' 
  | 'glamping' 
  | 'treehouse';

export type PropertyTag = 
  | 'Superhost' 
  | 'Frente al mar' 
  | 'Pet Friendly' 
  | 'Piscina privada' 
  | 'Vista a la montaña' 
  | 'Cancelación gratuita';

export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface ReviewStats {
  rating: number;
  reviewCount: number;
}

export interface Property {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: AccommodationType;
  pricePerNight: number;
  currency: string;
  location: Location;
  images: string[];
  reviews: ReviewStats;
  tags: PropertyTag[];
  amenities: string[];
  capacity: {
    maxGuests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  isAvailable: boolean;
  featuredAttr?: Record<string, string | number | boolean>;
}
```

### Esquema Mock Data (`src/data/mockProperties.json`)

```json
[
  {
    "id": "prop-001",
    "title": "Cabaña Alpina Alpaca Peak",
    "subtitle": "Espectacular cabaña con jacuzzi y chimenea a la leña",
    "description": "Disfruta del bosque privado en una cabaña de madera rústica pero moderna.",
    "type": "cabin",
    "pricePerNight": 145,
    "currency": "USD",
    "location": {
      "address": "Km 12 Vía al Nevado",
      "city": "Manizales",
      "state": "Caldas",
      "country": "Colombia",
      "latitude": 4.813,
      "longitude": -75.517
    },
    "images": [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
    ],
    "reviews": {
      "rating": 4.95,
      "reviewCount": 84
    },
    "tags": ["Superhost", "Vista a la montaña", "Pet Friendly"],
    "amenities": ["Jacuzzi", "Chimenea", "Wi-Fi", "Estacionamiento"],
    "capacity": {
      "maxGuests": 4,
      "bedrooms": 2,
      "beds": 2,
      "bathrooms": 1
    },
    "isAvailable": true,
    "featuredAttr": {
      "woodType": "Pino Teja",
      "hasHeating": true
    }
  },
  {
    "id": "prop-002",
    "title": "Villa Brisa Marina & Private Beach",
    "subtitle": "Acceso directo a la playa con piscina infinity",
    "description": "Lujosa villa frente al mar Caribe con servicio de chef opcional.",
    "type": "beach",
    "pricePerNight": 320,
    "currency": "USD",
    "location": {
      "address": "Playa Blanca Sector 3",
      "city": "Barú",
      "state": "Cartagena",
      "country": "Colombia",
      "latitude": 10.231,
      "longitude": -75.612
    },
    "images": [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "reviews": {
      "rating": 4.88,
      "reviewCount": 142
    },
    "tags": ["Superhost", "Frente al mar", "Piscina privada"],
    "amenities": ["Piscina Infinity", "Muelle privado", "Aire Acondicionado", "Chef"],
    "capacity": {
      "maxGuests": 8,
      "bedrooms": 4,
      "beds": 5,
      "bathrooms": 4
    },
    "isAvailable": true,
    "featuredAttr": {
      "distanceToBeachMeters": 0,
      "hasPrivateBeach": true
    }
  }
]
```

---

## 4. Implementación del Patrón de Diseño (Factory Pattern)

### Diagrama Conceptual

```
                      +-----------------------------+
                      |   IPropertyProduct (Interface) |
                      +-----------------------------+
                                     ^
                                     |  implements
          +--------------------------+--------------------------+
          |                          |                          |
+-------------------+      +-------------------+      +--------------------+
| CabinPropertyProduct|    | BeachPropertyProduct|    | MansionPropertyProduct|
+-------------------+      +-------------------+      +--------------------+
          ^                          ^                          ^
          +--------------------------+--------------------------+
                                     | instantiates
                          +--------------------+
                          |   PropertyFactory  | <=== (Registry Engine)
                          +--------------------+
```

### Implementación Código TypeScript

#### `src/factories/types/factory.types.ts`
```typescript
import { Property } from '@/types/property';

export interface IPropertyProduct {
  property: Property;
  getFormattedPrice(): string;
  getPrimaryBadge(): { label: string; variant: 'emerald' | 'cyan' | 'amber' | 'purple' };
  getSecondaryDetails(): string;
  getCustomActionLabel(): string;
  isHighValue(): boolean;
}

export type PropertyProductConstructor = new (data: Property) => IPropertyProduct;
```

#### `src/factories/products/BasePropertyProduct.ts`
```typescript
import { Property } from '@/types/property';
import { IPropertyProduct } from '../types/factory.types';

export abstract class BasePropertyProduct implements IPropertyProduct {
  constructor(public property: Property) {}

  getFormattedPrice(): string {
    return `$${this.property.pricePerNight} ${this.property.currency} / noche`;
  }

  getCustomActionLabel(): string {
    return 'Ver alojamiento';
  }

  isHighValue(): boolean {
    return this.property.pricePerNight > 250 || this.property.reviews.rating >= 4.9;
  }

  abstract getPrimaryBadge(): { label: string; variant: 'emerald' | 'cyan' | 'amber' | 'purple' };
  abstract getSecondaryDetails(): string;
}
```

#### `src/factories/products/CabinPropertyProduct.ts`
```typescript
import { BasePropertyProduct } from './BasePropertyProduct';

export class CabinPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge() {
    return { label: '🌲 Cabaña & Bosque', variant: 'emerald' as const };
  }

  getSecondaryDetails(): string {
    const bedrooms = this.property.capacity.bedrooms;
    return `${bedrooms} ${bedrooms === 1 ? 'habitación' : 'habitaciones'} • Jacuzzi / Chimenea`;
  }
}
```

#### `src/factories/products/BeachPropertyProduct.ts`
```typescript
import { BasePropertyProduct } from './BasePropertyProduct';

export class BeachPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge() {
    return { label: '🏖️ Frente al Mar', variant: 'cyan' as const };
  }

  getSecondaryDetails(): string {
    return `Vista panorámica al mar • ${this.property.capacity.maxGuests} huéspedes max`;
  }
}
```

#### `src/factories/products/MansionPropertyProduct.ts`
```typescript
import { BasePropertyProduct } from './BasePropertyProduct';

export class MansionPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge() {
    return { label: '👑 Mansión Luxury', variant: 'purple' as const };
  }

  getSecondaryDetails(): string {
    return `Piscina privada & Serv. Exclusivo • ${this.property.capacity.bathrooms} baños`;
  }

  override getCustomActionLabel(): string {
    return 'Reservar Villa VIP';
  }
}
```

#### `src/factories/products/UrbanPropertyProduct.ts`
```typescript
import { BasePropertyProduct } from './BasePropertyProduct';

export class UrbanPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge() {
    return { label: '🏙️ Departamento Urbano', variant: 'amber' as const };
  }

  getSecondaryDetails(): string {
    return `Ubicación central • Wifi de alta velocidad`;
  }
}
```

#### `src/factories/PropertyFactory.ts` (Core Factory Registry)
```typescript
import { Property, AccommodationType } from '@/types/property';
import { IPropertyProduct, PropertyProductConstructor } from './types/factory.types';
import { CabinPropertyProduct } from './products/CabinPropertyProduct';
import { BeachPropertyProduct } from './products/BeachPropertyProduct';
import { MansionPropertyProduct } from './products/MansionPropertyProduct';
import { UrbanPropertyProduct } from './products/UrbanPropertyProduct';

export class PropertyFactory {
  private static registry: Map<AccommodationType, PropertyProductConstructor> = new Map();

  static {
    PropertyFactory.registerProduct('cabin', CabinPropertyProduct);
    PropertyFactory.registerProduct('beach', BeachPropertyProduct);
    PropertyFactory.registerProduct('mansion', MansionPropertyProduct);
    PropertyFactory.registerProduct('urban', UrbanPropertyProduct);
  }

  public static registerProduct(type: AccommodationType, constructor: PropertyProductConstructor): void {
    PropertyFactory.registry.set(type, constructor);
  }

  public static createProduct(data: Property): IPropertyProduct {
    const ProductClass = PropertyFactory.registry.get(data.type);
    if (!ProductClass) {
      return new UrbanPropertyProduct(data);
    }
    return new ProductClass(data);
  }

  public static createProductList(dataList: Property[]): IPropertyProduct[] {
    return dataList.map(data => PropertyFactory.createProduct(data));
  }
}
```

---

## 5. Desglose de Componentes UI/UX

1. **Header (`Header.tsx`):** Logo distintivo StayInn, navegación, botón CTA **"¿Tienes una propiedad?"** que activa `HostRegisterModal`, y selector de usuario.
2. **SearchBar (`SearchBar.tsx`):** Cápsula flotante estilo Glassmorphism con sub-controles de Destino, Fechas y Huéspedes (`+`/`-`).
3. **Categorías (`CategoryNav.tsx`):** Nav horizontal interactivo con scroll suave para filtrar por Cabañas, Frente al mar, Mansiones, etc.
4. **Grid de Tarjetas (`ListingGrid.tsx` / `PropertyCard.tsx`):** Renderizado dinámico vía `PropertyFactory` desplegando galería, badges por variante, calificación, precio y CTA **"Ver alojamiento"**.
5. **Modal de Anfitrión (`HostRegisterModal.tsx`):** Formulario modal con blur de fondo para simular el registro de propiedades por parte de propietarios.
6. **Footer (`Footer.tsx`):** Soporte, Términos, Anfitriones, Redes sociales e idioma/moneda.

---

## 6. Roadmap de Desarrollo (Sprint Plan para MVP)

- **Sprint 1:** Tokens de Diseño CSS HSL, tipos de TypeScript y `mockProperties.json`.
- **Sprint 2:** Maquetación de Layout (Header, Footer, CategoryNav, SearchBar).
- **Sprint 3:** Implementación de `PropertyFactory`, `BasePropertyProduct`, productos por tipo y `ListingGrid`.
- **Sprint 4:** Desarrollo de `HostRegisterModal`, estado interactivo y filtros reactivos.
- **Sprint 5:** Polish UI (animaciones, skeletons) y abstracción de la capa de API (**Repository Pattern**) lista para conectar con Backend REST/GraphQL.

