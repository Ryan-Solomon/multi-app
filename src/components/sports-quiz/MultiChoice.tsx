import React, { FC } from 'react';
import { TQuestion } from './SportsQuiz';
import './MultiChoice.styles.scss';

type Props = {
  question: TQuestion;
  checkIfCorrect: (a: string, b: string) => void;
};

function shuffle<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}

const MultiChoice: FC<Props> = ({ question, checkIfCorrect }) => {
  const {
    question: currentQuestion,
    correct_answer,
    incorrect_answers,
  } = question;
  const potentialAnswers = shuffle([...incorrect_answers, correct_answer]);

  return (
    <section className='multi-choice'>
      <h1>Multiple Choice</h1>
      <h1>{currentQuestion}</h1>
      {potentialAnswers.map((answer, idx) => {
        return (
          <button
            onClick={() => checkIfCorrect(correct_answer, answer)}
            key={answer + idx}
          >
            {answer}
          </button>
        );
      })}
    </section>
  );
};

export default MultiChoice;
