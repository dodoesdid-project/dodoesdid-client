import MonthlyCard from './MonthlyCard';
import MultiModal from './MultiModal';
import { useState } from 'react';

interface IGroupDetail {
  now: Date;
}

const MultiGroup = ({ now }: IGroupDetail) => {
  const dummy = [1, 2, 3]; // 예시 데이터 (그룹 목록)
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 관리
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null); // 선택된 카드 ID

  // 카드 클릭 시 모달 열기
  const handleCardClick = (id: number) => {
    setSelectedCardId(id); // 클릭된 카드 ID 설정
    setIsModalOpen(true); // 모달 열기
  };

  // 모달 닫기 핸들러
  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setSelectedCardId(null); // 카드 선택 해제
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <section className="py-3 px-4 text-center bg-white w-full">
          <span className="font-semibold text-gray-100 ">
            한 주 동안 <span className="text-sub-400">그룹원 모두</span>
            <br /> 다짐을 달성한 날이 표시돼요.
          </span>
        </section>

        {/* 그룹 카드 목록 */}
        <div className={`flex flex-wrap gap-4 bg-gray-30 pl-3 py-4`}>
          {dummy.map((index) => (
            <div key={index} onClick={() => handleCardClick(index)}>
              <MonthlyCard now={now} />
            </div>
          ))}
        </div>
      </div>

      {/* 클릭 시 모달 열기 */}
      {isModalOpen && selectedCardId !== null && (
        <div className="">
          <MultiModal
            onClose={closeModal}
            now={now}
            cardId={selectedCardId} // 선택된 카드 ID 전달
          />
        </div>
      )}
    </>
  );
};

export default MultiGroup;
