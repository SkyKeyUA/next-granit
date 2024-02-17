import $api from '@api/index';
import { IProducts } from '@customTypes/index';
import { SearchIProductsParams } from '@redux/reducers/products/products.types';
import { AxiosResponse } from 'axios';

export class ProductsServices {
  static async getProducts(
    params: SearchIProductsParams,
  ): Promise<AxiosResponse<IProducts, SearchIProductsParams>> {
    const { currentPage } = params;
    return $api.get<IProducts>(`products?limit=9&page=${currentPage}`);
  }
}
