export type ApiResponse<data> = {
  count: number;
  rows: data[];
};

export type Product = {
  id: number;
  title: string;
  content: string;
  images: string[];
  subCatalogId: string;
  userId: number;
};
