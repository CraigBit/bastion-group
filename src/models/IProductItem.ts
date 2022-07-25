export interface IProductItem {
  id: number;
  number: string;
  name: string;
  type: string;
  price: string;
  standard: string;
  photo: any;
  quantity: number;
  increment: () => void;
  decrement: () => void;
  addToCart: () => void;
}
