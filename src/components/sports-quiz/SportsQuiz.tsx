import React, { useEffect } from 'react';

// Types

type TQuestion = {
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type TAction =
  | {
      type: 'SET_LOADING';
    }
  | {
      type: 'SET_ERROR';
    }
  | {
      type: 'SET_DATA';
      payload: TQuestion[];
    };

type TState = {
  questions: TQuestion[] | null;
  error: boolean;
  loading: boolean;
};

// Reducer
const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        questions: null,
        error: false,
        loading: true,
      };
    case 'SET_DATA':
      return {
        questions: action.payload,
        error: false,
        loading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error('Action not supported');
  }
};

// Initial State
const initialState: TState = {
  questions: [],
  error: false,
  loading: false,
};

const SportsQuiz = () => {
  const [data, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      dispatch({ type: 'SET_LOADING' });
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy`
        );
        const { results } = await res.json();
        dispatch({ type: 'SET_DATA', payload: results });
      } catch (e) {
        dispatch({ type: 'SET_ERROR' });
      }
    };
    fetchQuestions();
  }, []);

  console.log(data);

  return <div></div>;
};

export default SportsQuiz;
