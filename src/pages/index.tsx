import React, { memo, useCallback, useState } from "react";
import Button from "../components/Button";
import { NavigateFunction, useNavigate } from "react-router-dom";

const TodoList: React.FC<{ todos: string[] }> = memo(({ todos }) => {
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
  return <h1>{counter}</h1>;
});

const MemoPage: React.FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const [count, setCount] = useState<number>(0);
  const [todos, SetTodos] = useState<string[]>([
    "Sholat",
    "Mancing",
    "Makan",
    "Chat eyyin",
    "Tidur",
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  console.log(import.meta.env.VITE_APP_TITLE);
  console.log(import.meta.env.VITE_BASE_URL);

  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);

  const addTodo = useCallback(() => {
    SetTodos((prevTodos) => [...prevTodos, newTodo]);
  }, [newTodo]);

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
          className="border p-2"
          placeholder="Tambah Todo"
        />
        <button type="button" onClick={addTodo}>
          Tambah
        </button>
      </div>

      <div className="flex space-x-3 my-2">
        <Button label="Kurang" onClick={decrement} />
        <Button label="Tambah" onClick={increment} />
      </div>
      <Button
        label="To Use Callback"
        onClick={useCallback(
          () =>
            navigate("/use-callback", {
              viewTransition: true,
              preventScrollReset: true,
            }),
          [navigate]
        )}
      />
    </div>
  );
};

export default MemoPage;
