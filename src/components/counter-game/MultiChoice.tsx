import React, { FC } from 'react';
import { TQuestion } from '../sports-quiz/SportsQuiz';

type Props = {
  question: TQuestion;
};

function shuffle<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}

const MultiChoice: FC<Props> = ({ question }) => {
  const {
    question: currentQuestion,
    correct_answer,
    incorrect_answers,
  } = question;
  const potentialAnswers = shuffle([...incorrect_answers, correct_answer]);

  return (
    <section className='multi-choice'>
      <h1>{currentQuestion}</h1>
      {potentialAnswers.map((answer, idx) => {
        return <h3 key={answer + idx}>{answer}</h3>;
      })}
    </section>
  );
};

export default MultiChoice;
