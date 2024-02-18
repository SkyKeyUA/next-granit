import $api from '@api/index';
import { Product, ApiResponse } from '@customTypes/index';

export class ProductsServices {
  static async getProducts(currentPage: string): Promise<ApiResponse<Product>> {
    const response: ApiResponse<Product> = await $api.get(`products?limit=9&page=${currentPage}`);
    return {
      count: response.count,
      rows: response.rows,
    };
  }
  static async removeProduct(id: string) {
    return $api.delete(`products/${id}`);
  }
}
