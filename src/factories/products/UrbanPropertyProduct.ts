import { BasePropertyProduct } from './BasePropertyProduct';
import { PropertyBadgeInfo } from '../types/factory.types';

export class UrbanPropertyProduct extends BasePropertyProduct {
  getPrimaryBadge(): PropertyBadgeInfo {
    return { label: '🏙️ Departamento Urbano', variant: 'amber' };
  }

  getSecondaryDetails(): string {
    return `Ubicación céntrica • Wifi 500MB de alta velocidad`;
  }

  override getAccentColorClass(): string {
    return 'from-amber-800 to-slate-900';
  }
}
