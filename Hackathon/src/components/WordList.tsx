import React from "react";
import type { Word } from "../type";

interface Props {
  words: Word[];
  onDelete: (id: number) => void;
}

export default function WordList({ words, onDelete }: Props) {
  return (
    <table className="w-full border-collapse bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Từ tiếng Anh</th>
          <th className="border px-4 py-2">Nghĩa tiếng Việt</th>
          <th className="border px-4 py-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        {words.map(w => (
          <tr key={w.id}>
            <td className="border px-4 py-2">{w.english}</td>
            <td className="border px-4 py-2">{w.vietnamese}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onDelete(w.id)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                🗑️ Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
