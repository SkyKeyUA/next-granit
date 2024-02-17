export interface IProducts {
  count: number;
  rows: IProduct[];
}

export interface IProduct {
  id: number;
  title: string;
  content: string;
  image: string;
  subCatalogId: string;
  userId: number;
}
