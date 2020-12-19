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
  addToCart: (product: TProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export enum ProductStatus {
  idle,
  pending,
  resolved,
  rejected,
}
