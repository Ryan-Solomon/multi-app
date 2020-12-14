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
  const [answerStatus, setAnswerStatus] = React.useState<
    'pending' | 'correct' | 'incorrect'
  >('pending');
  const {
    question: currentQuestion,
    correct_answer,
    incorrect_answers,
  } = question;
  const potentialAnswers = shuffle([...incorrect_answers, correct_answer]);

  if (answerStatus === 'correct') return <h1>Nice!</h1>;
  if (answerStatus === 'incorrect') return <h1>Maybe next time</h1>;

  return (
    <section className='multi-choice'>
      <h1>Multiple Choice</h1>
      <h1>{currentQuestion}</h1>
      {potentialAnswers.map((answer, idx) => {
        return (
          <button
            onClick={() => {
              checkIfCorrect(correct_answer, answer);
              if (answer === correct_answer) {
                setAnswerStatus('correct');
              } else {
                setAnswerStatus('incorrect');
              }
            }}
            key={answer + idx}
          >
            {answer}
          </button>
        );
      })}
    </section>
  );
};

export default React.memo(MultiChoice);
