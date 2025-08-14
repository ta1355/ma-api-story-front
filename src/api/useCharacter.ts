import { useState } from "react";
import axios from "axios";
import type { CharacterDto } from "../types/Character.dto";

const BASE_URL = "http://localhost:8080";

export function useCharacter() {
  const [character, setCharacter] = useState<CharacterDto | null>(null);

  const fetchCharacter = async (name: string) => {
    try {
      const res = await axios.get<CharacterDto>(
        `${BASE_URL}/maple/character?name=${encodeURIComponent(name)}`
      );
      setCharacter(res.data);
    } catch {
      setCharacter(null);
    }
  };

  return { character, fetchCharacter };
}
