export interface EquipmentOption {
  str: string;
  dex: string;
  int: string;
  luk: string;
  attack_power: string;
  magic_power: string;
  boss_damage: string;
  ignore_monster_armor: string;
}

export interface ItemBaseOption {
  base_equipment_level: number;
}

export interface EquipmentItemDto {
  item_equipment_part: string;
  item_name: string;
  item_icon: string;
  item_total_option: EquipmentOption;
  potential_option_grade: string | null;
  potential_option_1: string | null;
  potential_option_2: string | null;
  potential_option_3: string | null;
  additional_potential_option_grade: string | null;
  additional_potential_option_1: string | null;
  additional_potential_option_2: string | null;
  additional_potential_option_3: string | null;
  starforce: string;
  item_base_option: ItemBaseOption;
  soul_name: string | null;
  soul_option: string | null;
}
