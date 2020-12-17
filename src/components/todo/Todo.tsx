import React, { FormEvent } from 'react';
import './Todo.styles.scss';

type TTodos = {
  todoText: string;
  id: number;
};

const Todo = () => {
  const [input, setInput] = React.useState('');
  const [todos, setTodos] = React.useState<TTodos[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodos((todos) => [...todos, { todoText: input, id: Math.random() }]);
    setInput('');
  };

  const removeTodo = (id1: number) => {
    setTodos((todos) => todos.filter(({ id }) => id !== id1));
  };

  return (
    <div className='todo-container'>
      <header>
        <h1>stuff i need to do</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>Add Todo</label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
        />
        <button type='submit'>Add Todo</button>
      </form>
      <section className='todos'>
        {todos.length > 0 &&
          todos.map(({ todoText, id }) => {
            return (
              <>
                <h2 key={id}>{todoText}</h2>
                <button onClick={() => removeTodo(id)}>X</button>
              </>
            );
          })}
      </section>
    </div>
  );
};

export default Todo;
