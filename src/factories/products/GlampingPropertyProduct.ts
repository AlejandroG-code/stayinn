import { BasePropertyProduct } from './BasePropertyProduct';
import { PropertyBadgeInfo } from '../types/factory.types';

export class GlampingPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge(): PropertyBadgeInfo {
    return { label: '⛺ Glamping Starlight', variant: 'indigo' };
  }

  getSecondaryDetails(): string {
    return `Domo Geodésico • Telescopio & Jacuzzi bajo estrellas`;
  }

  override getAccentColorClass(): string {
    return 'from-indigo-900 to-blue-950';
  }
}
