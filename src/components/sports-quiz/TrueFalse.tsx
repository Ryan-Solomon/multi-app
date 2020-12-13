import React, { FC } from 'react';
import { TQuestion } from './SportsQuiz';

type Props = {
  question: TQuestion;
  checkIfCorrect: (a: string, b: string) => void;
};

const TrueFalse: FC<Props> = ({ question, checkIfCorrect }) => {
  const {
    question: currentQuestion,
    correct_answer,
    incorrect_answers,
  } = question;

  return (
    <section className='true-false'>
      <h2>{currentQuestion}</h2>
      <button onClick={() => checkIfCorrect(correct_answer, 'true')}>
        True
      </button>
      <button onClick={() => checkIfCorrect(correct_answer, 'false')}>
        False
      </button>
    </section>
  );
};

export default TrueFalse;
