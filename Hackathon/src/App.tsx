import React, { useState } from "react";
import Header from "./components/Header";
import WordForm from "./components/WordForm";
import WordList from "./components/WordList";
import type { Word } from "./type";

export default function App() {
  const [words, setWords] = useState<Word[]>([
    { id: 1, english: "Apple", vietnamese: "Quả táo" },
    { id: 2, english: "Book", vietnamese: "Sách" },
    { id: 3, english: "Computer", vietnamese: "Máy tính" },
    { id: 4, english: "Hello", vietnamese: "Xin chào" },
  ]);

  const handleAdd = (word: Word) => setWords([...words, word]);
  const handleDelete = (id: number) => setWords(words.filter(w => w.id !== id));

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <Header />
      <WordForm onAdd={handleAdd} existingWords={words} />
      <div className="mt-6">
        <WordList words={words} onDelete={handleDelete} />
      </div>
    </div>
  );
}
