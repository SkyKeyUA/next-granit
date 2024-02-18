export type Products = {
  count: number;
  rows: Product[];
};

export type Product = {
  id: number;
  title: string;
  content: string;
  image: string;
  subCatalogId: string;
  userId: number;
};
