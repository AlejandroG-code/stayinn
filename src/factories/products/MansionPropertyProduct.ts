import { BasePropertyProduct } from './BasePropertyProduct';
import { PropertyBadgeInfo } from '../types/factory.types';

export class MansionPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge(): PropertyBadgeInfo {
    return { label: '👑 Mansión Luxury', variant: 'purple' };
  }

  getSecondaryDetails(): string {
    return `Piscina privada & Serv. Exclusivo • ${this.property.capacity.bathrooms} baños`;
  }

  override getCustomActionLabel(): string {
    return 'Reservar Villa VIP';
  }

  override getAccentColorClass(): string {
    return 'from-purple-900 to-indigo-950';
  }
}
