import { AccommodationType } from './property';

export interface SearchFilterState {
  destination: string;
  category: AccommodationType | 'all';
  checkIn: string | null;
  checkOut: string | null;
  guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
  minPrice?: number;
  maxPrice?: number;
}
