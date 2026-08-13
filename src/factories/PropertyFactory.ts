import { Property, AccommodationType } from '@/types/property';
import { IPropertyProduct, PropertyProductConstructor } from './types/factory.types';
import { CabinPropertyProduct } from './products/CabinPropertyProduct';
import { BeachPropertyProduct } from './products/BeachPropertyProduct';
import { MansionPropertyProduct } from './products/MansionPropertyProduct';
import { UrbanPropertyProduct } from './products/UrbanPropertyProduct';
import { GlampingPropertyProduct } from './products/GlampingPropertyProduct';
import { TreehousePropertyProduct } from './products/TreehousePropertyProduct';

export class PropertyFactory {
  // Map dinámico de registro por tipo de alojamiento
  private static registry: Map<AccommodationType, PropertyProductConstructor> = new Map();

  // Registro estático inicial
  static {
    PropertyFactory.registerProduct('cabin', CabinPropertyProduct);
    PropertyFactory.registerProduct('beach', BeachPropertyProduct);
    PropertyFactory.registerProduct('mansion', MansionPropertyProduct);
    PropertyFactory.registerProduct('urban', UrbanPropertyProduct);
    PropertyFactory.registerProduct('glamping', GlampingPropertyProduct);
    PropertyFactory.registerProduct('treehouse', TreehousePropertyProduct);
  }

  /**
   * Registra una nueva clase de producto dinámicamente sin modificar la lógica interna.
   * Permite extensibilidad (Principio Open/Closed - SOLID).
   */
  public static registerProduct(type: AccommodationType, constructor: PropertyProductConstructor): void {
    PropertyFactory.registry.set(type, constructor);
  }

  /**
   * Instancia el Producto correspondiente según la propiedad `type` del objeto JSON.
   */
  public static createProduct(data: Property): IPropertyProduct {
    const ProductClass = PropertyFactory.registry.get(data.type);

    if (!ProductClass) {
      // Fallback a tipo urbano si el tipo no está explícitamente registrado
      return new UrbanPropertyProduct(data);
    }

    return new ProductClass(data);
  }

  /**
   * Transforma una lista de datos en bruto en una lista de Business Objects listos para la UI.
   */
  public static createProductList(dataList: Property[]): IPropertyProduct[] {
    return dataList.map(data => PropertyFactory.createProduct(data));
  }
}
