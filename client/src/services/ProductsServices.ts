import $api from '@api/index';
import { Products } from '@customTypes/index';
import { AxiosResponse } from 'axios';

export class ProductsServices {
  static async getProducts(currentPage: string): Promise<AxiosResponse<Products>> {
    return $api.get(`products?limit=9&page=${currentPage}`);
  }
}
