import { setUncaughtExceptionCaptureCallback } from 'process';
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
  const [grudges, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = React.useState('');

  return (
    <>
      <h1>Grudges</h1>
      <h3>Add Grudge</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Your grudge'
        type='text'
      />
      <button
        onClick={() => {
          dispatch({
            type: 'ADD',
            payload: {
              text: input,
              id: Math.random(),
            },
          });
          setInput('');
        }}
      >
        Add
      </button>
      {grudges.grudges.length > 0 &&
        grudges.grudges.map((g) => {
          return (
            <>
              <h1 key={g.id}>{g.text}</h1>
              <button
                onClick={() => {
                  dispatch({ type: 'DELETE', payload: g.id });
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  dispatch({ type: 'CLEAR' });
                }}
              >
                Clear
              </button>
            </>
          );
        })}
    </>
  );
};

export default GrudgeList;
