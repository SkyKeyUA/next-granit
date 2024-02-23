export type ApiResponse<data> = {
  count: number;
  rows: data[];
};

export type Product = {
  id: number;
  title: string;
  content: string;
  image: string;
  subCatalogId: string;
  userId: number;
};
