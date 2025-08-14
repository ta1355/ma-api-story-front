import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCharacter } from "../api/useCharacter";
import { useEquipment } from "../api/useEquipment";
import Header from "../components/Layout/Header";
import CharacterInfoDisplay from "../components/Character/CharacterInfoDisplay";
import EquipmentDisplay from "../components/Equipment/EquipmentDisplay";

export default function CharacterPage() {
  const { name } = useParams();
  const { character, fetchCharacter } = useCharacter();
  const { equipment, fetchEquipment } = useEquipment();

  useEffect(() => {
    if (name) {
      fetchCharacter(name);
      fetchEquipment(name);
    }
  }, [name]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {character && <CharacterInfoDisplay character={character} />}
        {equipment.length > 0 && <EquipmentDisplay equipment={equipment} />}
      </main>
    </div>
  );
}
