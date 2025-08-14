import type { CharacterDto } from "../../types/Character.dto";

interface Props {
  character: CharacterDto;
}

export default function CharacterInfoDisplay({ character }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow-md">
      {/* 캐릭터 프로필 */}
      <div className="flex flex-col items-center text-center">
        <img
          src={character.characterImage}
          alt={character.characterName}
          className="w-24 h-24 rounded-full border mb-3"
        />
        <h1 className="text-2xl font-bold">{character.characterName}</h1>
        <p className="text-gray-500 text-sm">
          {character.worldName} | Lv.{character.characterLevel}{" "}
          {character.characterClass}
        </p>
        <p className="text-sm mt-1">
          길드: {character.characterGuildName ?? "없음"}
        </p>
      </div>

      {/* 캐릭터 주요 스탯 */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          STR: <b>{character.str}</b>
        </div>
        <div>
          DEX: <b>{character.dex}</b>
        </div>
        <div>
          INT: <b>{character.intel}</b>
        </div>
        <div>
          LUK: <b>{character.luk}</b>
        </div>
        <div>
          HP: <b>{character.hp}</b>
        </div>
        <div>
          공격력: <b>{character.attackPower}</b>
        </div>
        <div>
          마력: <b>{character.magicPower}</b>
        </div>
        <div>
          보스 데미지: <b>{character.bossDamage}%</b>
        </div>
        <div>
          최종 데미지: <b>{character.finalDamage}%</b>
        </div>
        <div>
          방무: <b>{character.ignoreDefense}%</b>
        </div>
        <div>
          크리 확률: <b>{character.critRate}%</b>
        </div>
        <div>
          크리 데미지: <b>{character.critDamage}%</b>
        </div>
        <div>
          아이템 드롭률: <b>{character.itemDropRate}%</b>
        </div>
        <div>
          버프 지속시간: <b>{character.buffDuration}%</b>
        </div>
      </div>
    </section>
  );
}
