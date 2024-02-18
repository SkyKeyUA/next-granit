import $api from '@api/index';
import { Product, Products } from '@customTypes/index';
import { AxiosResponse } from 'axios';

export class ProductsServices {
  static async getProducts(currentPage: string): Promise<AxiosResponse<Products>> {
    return $api.get(`products?limit=9&page=${currentPage}`);
  }
  static async removeProduct(id: string): Promise<AxiosResponse<Product>> {
    return $api.delete(`products/${id}`);
  }
}
