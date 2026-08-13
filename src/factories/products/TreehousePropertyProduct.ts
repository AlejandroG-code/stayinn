import { BasePropertyProduct } from './BasePropertyProduct';
import { PropertyBadgeInfo } from '../types/factory.types';

export class TreehousePropertyProduct extends BasePropertyProduct {
  getPrimaryBadge(): PropertyBadgeInfo {
    return { label: '🪵 Casa del Árbol Eco', variant: 'rose' };
  }

  getSecondaryDetails(): string {
    return `Suspendida a 15m • 100% Energía Solar Reserva Eco`;
  }

  override getAccentColorClass(): string {
    return 'from-amber-900 to-emerald-950';
  }
}
