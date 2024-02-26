import $api from '@api/index';
import { Product, ApiResponse } from '@customTypes/index';

export class ProductsServices {
  static async getAllProducts(): Promise<ApiResponse<Product>> {
    return $api.get('products/all');
  }
  static async getProducts(currentPage: string): Promise<ApiResponse<Product>> {
    return $api.get(`products?limit=9&page=${currentPage}`);
  }
  static async removeProduct(id: string) {
    return $api.delete(`products/${id}`);
  }
}
