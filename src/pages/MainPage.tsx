import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [characterName, setCharacterName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (characterName.trim()) {
      navigate(`/character/${encodeURIComponent(characterName.trim())}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow p-6">
        <div className="max-w-xl mx-auto flex justify-center items-center">
          <span className="text-2xl font-bold text-blue-600">
            MapleStat Viewer
          </span>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg flex gap-3"
        >
          <input
            type="text"
            placeholder="캐릭터 이름을 입력하세요"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-bold transition"
          >
            검색
          </button>
        </form>
        <div className="mt-8 text-gray-400">Ma-api-story</div>
      </main>
    </div>
  );
}
