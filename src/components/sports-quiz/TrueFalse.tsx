import React, { FC } from 'react';
import { TQuestion } from './SportsQuiz';

type Props = {
  question: TQuestion;
};

const TrueFalse: FC<Props> = ({ question }) => {
  const {
    question: currentQuestion,
    correct_answer,
    incorrect_answers,
  } = question;

  return (
    <section className='true-false'>
      <h2>{currentQuestion}</h2>
      <button>True</button>
      <button>False</button>
    </section>
  );
};

export default TrueFalse;
