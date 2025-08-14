import { useState } from "react";
import axios from "axios";
import type { EquipmentItemDto } from "../types/EquipmentItem.dto";

const BASE_URL = "http://localhost:8080";

export function useEquipment() {
  const [equipment, setEquipment] = useState<EquipmentItemDto[]>([]);

  const fetchEquipment = async (name: string) => {
    try {
      const res = await axios.get<EquipmentItemDto[]>(
        `${BASE_URL}/maple/item_info?name=${encodeURIComponent(name)}`
      );
      setEquipment(res.data);
    } catch (error) {
      console.error("장비 정보 불러오기 실패", error);
      setEquipment([]);
    }
  };

  return { equipment, fetchEquipment };
}
