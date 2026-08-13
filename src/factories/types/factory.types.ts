import { Property } from '@/types/property';

export type BadgeVariant = 'emerald' | 'cyan' | 'amber' | 'purple' | 'rose' | 'indigo';

export interface PropertyBadgeInfo {
  label: string;
  variant: BadgeVariant;
}

export interface IPropertyProduct {
  property: Property;
  getFormattedPrice(): string;
  getPrimaryBadge(): PropertyBadgeInfo;
  getSecondaryDetails(): string;
  getCustomActionLabel(): string;
  isHighValue(): boolean;
  getAccentColorClass(): string;
}

export type PropertyProductConstructor = new (data: Property) => IPropertyProduct;
