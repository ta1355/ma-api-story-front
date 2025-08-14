import type { EquipmentItemDto } from "../../types/EquipmentItem.dto";

interface Props {
  equipment: EquipmentItemDto[];
}

export default function EquipmentDisplay({ equipment }: Props) {
  return (
    <section className="mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">장착 장비</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {equipment.map((item) => (
          <div
            key={item.item_name}
            className="border rounded p-3 text-sm hover:shadow transition"
          >
            <img
              src={item.item_icon}
              alt={item.item_name}
              className="w-12 h-12 mb-2"
            />
            <div className="font-semibold">{item.item_name}</div>
            <p className="text-gray-500 text-xs">{item.item_equipment_part}</p>

            {/* 주요 스탯 */}
            <div className="mt-1 text-xs">
              STR: {item.item_total_option.str} / ATK:{" "}
              {item.item_total_option.attack_power}
            </div>

            {/* 잠재옵션 */}
            <div className="mt-2 text-xs">
              <p className="font-bold text-yellow-600">
                {item.potential_option_grade ?? "잠재 없음"}
              </p>
              {[
                item.potential_option_1,
                item.potential_option_2,
                item.potential_option_3,
              ]
                .filter(Boolean)
                .map((opt, idx) => (
                  <p key={idx}>{opt}</p>
                ))}
            </div>

            {/* 추가옵션 */}
            {item.additional_potential_option_grade && (
              <div className="mt-1 text-xs">
                <p className="font-bold text-purple-600">
                  {item.additional_potential_option_grade}
                </p>
                {[
                  item.additional_potential_option_1,
                  item.additional_potential_option_2,
                  item.additional_potential_option_3,
                ]
                  .filter(Boolean)
                  .map((opt, idx) => (
                    <p key={idx}>{opt}</p>
                  ))}
              </div>
            )}

            {/* 스타포스 */}
            <p className="text-xs mt-1">★ {item.starforce}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
