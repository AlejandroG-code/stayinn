import { Property } from '@/types/property';
import { IPropertyProduct, PropertyBadgeInfo } from '../types/factory.types';

export abstract class BasePropertyProduct implements IPropertyProduct {
  constructor(public property: Property) {}

  getFormattedPrice(): string {
    return `$${this.property.pricePerNight} ${this.property.currency} / noche`;
  }

  getCustomActionLabel(): string {
    return 'Ver alojamiento';
  }

  isHighValue(): boolean {
    return this.property.pricePerNight > 250 || this.property.reviews.rating >= 4.93;
  }

  getAccentColorClass(): string {
    return 'from-slate-900 to-indigo-900';
  }

  abstract getPrimaryBadge(): PropertyBadgeInfo;
  abstract getSecondaryDetails(): string;
}
