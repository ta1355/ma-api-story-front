import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CharacterPage from "./pages/CharacterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* 기본 검색 페이지 */}
        <Route path="/character/:name" element={<CharacterPage />} />{" "}
        {/* 캐릭터 검색 결과 */}
      </Routes>
    </BrowserRouter>
  );
}
