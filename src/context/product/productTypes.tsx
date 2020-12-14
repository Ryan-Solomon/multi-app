export type TProduct = {
  id: number;
  title: string;
  price: number;
  decsription: string;
  category: string;
  image: string;
};

export type TContext = {
  products: TProduct[];
  status: ProductStatus;
};

export enum ProductStatus {
  idle,
  pending,
  resolved,
  rejected,
}
