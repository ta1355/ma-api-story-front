import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [characterName, setCharacterName] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (characterName.trim()) {
      navigate(`/character/${encodeURIComponent(characterName.trim())}`);
    }
  };

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MapleStat Viewer</div>
        <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-md">
          <input
            type="text"
            placeholder="캐릭터 이름을 입력하세요"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            검색
          </button>
        </form>
      </div>
    </header>
  );
}
