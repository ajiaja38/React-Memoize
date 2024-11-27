import React, { useCallback, useState } from "react";
import SearchField from "../components/SearchField";

const UseCallBackPage: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [student, setStudent] = useState<string[]>([
    "M. Aji Perdana",
    "Erlin Novasia",
    "Frasiska Risma Yolanda",
    "Reni Widia Anggraini",
    "Ridwan Alamsyah",
  ]);

  const increment = () => setCount((prevCount: number) => prevCount + 1);
  const decrement = () => setCount((prevCount: number) => prevCount - 1);

  const filteringStudent = useCallback(
    (text: string) => {
      const filteredData: string[] = student.filter((student: string) =>
        student.toLowerCase().includes(text.toLowerCase())
      );
      setStudent(filteredData);
    },
    [student]
  );

  const shuffleStudent = (arr: string[]): string[] => {
    return [...arr].sort(() => 0.5 - Math.random());
  };

  return (
    <div className="container mx-auto">
      <h1>Count: {count}</h1>
      <div className="flex gap-3">
        <button className="p-2 bg-yellow-400 rounded" onClick={increment}>
          Tambah
        </button>
        <button className="p-2 bg-yellow-400 rounded" onClick={decrement}>
          Kurang
        </button>
      </div>
      <hr className="my-2" />
      {student.map((student: string, index: number) => (
        <div key={index}>{student}</div>
      ))}
      <SearchField onChange={filteringStudent} />
      <button onClick={() => setStudent(shuffleStudent(student))}>
        Shuffle
      </button>
    </div>
  );
};

export default UseCallBackPage;
