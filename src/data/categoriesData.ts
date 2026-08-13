import { AccommodationType } from '@/types/property';

export interface Category {
  id: AccommodationType | 'all';
  label: string;
  iconName: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    label: 'Todos los alojamientos',
    iconName: 'Sparkles',
    description: 'Explora toda nuestra colección exclusiva'
  },
  {
    id: 'cabin',
    label: 'Cabañas',
    iconName: 'Trees',
    description: 'Refugios de montaña y bosque con encanto rústico'
  },
  {
    id: 'beach',
    label: 'Frente al mar',
    iconName: 'Waves',
    description: 'Villas y casas a pasos de la arena y el mar'
  },
  {
    id: 'mansion',
    label: 'Mansiones Luxury',
    iconName: 'Crown',
    description: 'Propiedades de lujo con servicios exclusivos'
  },
  {
    id: 'urban',
    label: 'Ciudad / Penthouse',
    iconName: 'Building2',
    description: 'Departamentos modernos en los mejores sectores urbanos'
  },
  {
    id: 'glamping',
    label: 'Glamping',
    iconName: 'Tent',
    description: 'Experiencias de camping de lujo con telescopios y jacuzzis'
  },
  {
    id: 'treehouse',
    label: 'Casas del Árbol',
    iconName: 'TreePine',
    description: 'Alojamiento ecológico suspendido en la naturaleza'
  }
];
