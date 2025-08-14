export interface CharacterDto {
  characterName: string;
  worldName: string;
  characterClass: string;
  characterLevel: number;
  characterImage: string;
  characterExp: number;
  characterExpRate: string;
  characterGender: string;
  characterGuildName: string;

  damage: number;
  bossDamage: number;
  finalDamage: number;
  ignoreDefense: number;
  critRate: number;
  critDamage: number;

  str: number;
  dex: number;
  intel: number;
  luk: number;
  hp: number;

  attackPower: number;
  magicPower: number;
  battlePower: number;

  itemDropRate: number;
  buffDuration: number;
  summonDuration: number;
  reuseCooldownSec: number;
}
