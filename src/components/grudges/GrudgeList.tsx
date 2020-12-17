import React, { useReducer } from 'react';

type TGrudge = {
  text: string;
  id: number;
};

type TState = {
  grudges: TGrudge[];
};

type TAction =
  | {
      type: 'ADD';
      payload: TGrudge;
    }
  | {
      type: 'DELETE';
      payload: number;
    }
  | {
      type: 'CLEAR';
    };

const initialState: TState = {
  grudges: [],
};

function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case 'ADD':
      return { grudges: [...state.grudges, action.payload] };
    case 'DELETE':
      return {
        grudges: [...state.grudges.filter(({ id }) => id !== action.payload)],
      };
    case 'CLEAR':
      return { grudges: [] };
    default:
      throw new Error('Action not supported');
  }
}

const GrudgeList = () => {
  const [grudges, setGrudges] = useReducer(reducer, initialState);
  return <div>grudges</div>;
};

export default GrudgeList;
