import React, { memo, useState } from "react";

const TodoList: React.FC<{ todos: string[] }> = memo(({ todos }) => {
  console.log(todos);

  return (
    <>
      {todos.map((todo: string, index: number) => (
        <ul key={index}>
          <li>{todo}</li>
        </ul>
      ))}
    </>
  );
});

const Counter: React.FC<{ counter: number }> = memo(({ counter }) => {
  console.log(counter);

  return <h1>{counter}</h1>;
});

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, SetTodos] = useState<string[]>([
    "Sholat",
    "Mancing",
    "Makan",
    "Chat eyyin",
    "Tidur",
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const addTodo = () => {
    SetTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div className="container mx-auto">
      <Counter counter={count} />
      <TodoList todos={todos} />
      <hr className="my-7" />
      <div className="flex space-x-3">
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          className="border"
          placeholder="Tambah Todo"
        />
        <button onClick={addTodo}>Tambah</button>
      </div>

      <div className="flex space-x-3">
        <button onClick={increment}>Tambah</button>
        <button onClick={decrement}>Kurang</button>
      </div>
    </div>
  );
};

export default App;
