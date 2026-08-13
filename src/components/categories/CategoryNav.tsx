'use client';

import React from 'react';
import { CATEGORIES } from '@/data/categoriesData';
import { AccommodationType } from '@/types/property';
import { 
  Sparkles, 
  Trees, 
  Waves, 
  Crown, 
  Building2, 
  Tent, 
  TreePine,
  LucideIcon 
} from 'lucide-react';

interface CategoryNavProps {
  selectedCategory: AccommodationType | 'all';
  onSelectCategory: (category: AccommodationType | 'all') => void;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  Trees,
  Waves,
  Crown,
  Building2,
  Tent,
  TreePine
};

export function CategoryNav({
  selectedCategory,
  onSelectCategory
}: CategoryNavProps) {
  return (
    <div className="w-full my-6 border-b-2 border-[#a8dadc] pb-5">
      <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-3 pt-1 px-1">
        {CATEGORIES.map((cat) => {
          const IconComponent = ICON_MAP[cat.iconName] || Sparkles;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'btn-frosted-active scale-105'
                  : 'btn-frosted hover:scale-102'
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#f1faee]' : 'text-[#457b9d]'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
