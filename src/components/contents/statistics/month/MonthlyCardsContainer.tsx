import MonthlyCard from './MonthlyCard';
import MonthlyDetail from './MonthlyDetail';
import { useState } from 'react';

interface IGroupDetail {
  now: Date;
}

const MonthlyCardsContainer = ({ now }: IGroupDetail) => {
  const dummy = [1, 2, 3];
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
  };

  return (
    <div className="flex flex-col items-center">
      {/* 카드가 선택되지 않았을 때 카드 렌더링시키기 */}
      {selectedCardId === null ? (
        <>
          <section className="py-3 px-4 text-center bg-white w-full">
            <span className="font-semibold text-gray-100 ">
              한 주 동안 <span className="text-sub-400">그룹원 모두</span>
              <br /> 다짐을 달성한 날이 표시돼요.
            </span>
          </section>

          <div className={`flex flex-wrap gap-4 bg-gray-30 pl-3 py-4`}>
            {dummy.map((index) => (
              <div key={index} onClick={() => handleCardClick(index)}>
                <MonthlyCard now={now} />
              </div>
            ))}
          </div>
        </>
      ) : (
        // 카드 선택 시 MonthlyDetail 표시
        <MonthlyDetail now={now} cardId={selectedCardId} />
      )}
    </div>
  );
};

export default MonthlyCardsContainer;
