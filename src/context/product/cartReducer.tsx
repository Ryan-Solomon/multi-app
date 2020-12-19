import { TProduct } from './productTypes';

type TAction =
  | {
      type: 'ADD';
      payload: TProduct;
    }
  | {
      type: 'REMOVE';
      payload: number;
    }
  | {
      type: 'CLEAR';
    };

export const cartReducer = (state: TProduct[], action: TAction) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((prod) => prod.id !== action.payload);
    case 'CLEAR':
      return [];
    default:
      throw new Error('Action not supported');
  }
};
