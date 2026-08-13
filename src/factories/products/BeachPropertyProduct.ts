import { BasePropertyProduct } from './BasePropertyProduct';
import { PropertyBadgeInfo } from '../types/factory.types';

export class BeachPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge(): PropertyBadgeInfo {
    return { label: '🏖️ Frente al Mar', variant: 'cyan' };
  }

  getSecondaryDetails(): string {
    return `Vista panorámica al mar • ${this.property.capacity.maxGuests} huéspedes max`;
  }

  override getAccentColorClass(): string {
    return 'from-cyan-800 to-blue-950';
  }
}
