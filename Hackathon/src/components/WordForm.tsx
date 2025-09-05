import React, { useState } from "react";
import type { Word } from "../type";

interface Props {
  onAdd: (word: Word) => void;
  existingWords: Word[];
}

export default function WordForm({ onAdd, existingWords }: Props) {
  const [english, setEnglish] = useState("");
  const [vietnamese, setVietnamese] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!english.trim() || !vietnamese.trim()) {
      setError("Không được để trống!");
      return;
    }
    if (existingWords.some(w => w.english.toLowerCase() === english.toLowerCase())) {
      setError("Từ này đã tồn tại!");
      return;
    }
    onAdd({
      id: Date.now(),
      english,
      vietnamese,
    });
    setEnglish("");
    setVietnamese("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2 items-center bg-white shadow rounded">
      <input
        className="border p-2 flex-1 rounded"
        placeholder="Từ tiếng Anh"
        value={english}
        onChange={e => setEnglish(e.target.value)}
      />
      <input
        className="border p-2 flex-1 rounded"
        placeholder="Nghĩa tiếng Việt"
        value={vietnamese}
        onChange={e => setVietnamese(e.target.value)}
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Thêm
      </button>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
