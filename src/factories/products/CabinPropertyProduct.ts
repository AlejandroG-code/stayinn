import { BasePropertyProduct } from './BasePropertyProduct';
import { PropertyBadgeInfo } from '../types/factory.types';

export class CabinPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge(): PropertyBadgeInfo {
    return { label: '🌲 Cabaña & Bosque', variant: 'emerald' };
  }

  getSecondaryDetails(): string {
    const bedrooms = this.property.capacity.bedrooms;
    return `${bedrooms} ${bedrooms === 1 ? 'habitación' : 'habitaciones'} • Jacuzzi / Chimenea`;
  }

  override getAccentColorClass(): string {
    return 'from-emerald-800 to-teal-950';
  }
}
