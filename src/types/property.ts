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
  | 'Cancelación gratuita'
  | 'Rooftop'
  | 'Jacuzzi privado';

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

export interface HostInfo {
  id: string;
  name: string;
  avatar: string;
  isSuperhost: boolean;
  joinedDate: string;
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
