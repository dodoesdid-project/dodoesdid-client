import GroupCard from './GroupCard';
import MonthlyCalendar from './MonthlyCalendar';
import { useState } from 'react';

interface IGroupDetail {
  now: Date;
}

const GroupCardsContainer = ({ now }: IGroupDetail) => {
  const dummy = [1, 2, 3, 4];
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
  };

  return (
    <div className="flex flex-col items-center">
      {/* 카드가 선택되지 않았을 때 카드 렌더링시키기 */}
      {selectedCardId === null ? (
        <>
          <section className="pt-2 px-4 text-center">
            <span className="font-semibold text-gray-90">
              한 주 동안 <span className="text-sub-400">그룹원 모두</span>
              <br /> 다짐을 달성한 날이 표시돼요.
            </span>
          </section>

          <div
            className={`flex flex-wrap justify-center items-center gap-5 mt-4`}
          >
            {dummy.map((index) => (
              <div key={index} onClick={() => handleCardClick(index)}>
                <GroupCard now={now} />
              </div>
            ))}
          </div>
        </>
      ) : (
        // 카드 선택 시 MonthlyCalendar 표시
        <MonthlyCalendar now={now} cardId={selectedCardId} />
      )}
    </div>
  );
};

export default GroupCardsContainer;
