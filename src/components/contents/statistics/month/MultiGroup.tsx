import { IDazimData, IGroupDetail } from '../../../../types/statisticsType';
import MonthlyCard from './MonthlyCard';
import MultiModal from './MultiModal';
import React, { useState } from 'react';

const MultiGroup = ({ now, data, isRecordView }: IGroupDetail) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<IDazimData | null>(null);

  const handleCardClick = (group: IDazimData) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGroup(null);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gray-30 h-[calc(100vh-340px)]">
        <section className="py-3 px-4 text-center bg-white w-full">
          <span className="font-semibold text-gray-100 ">
            한 달 동안
            <span
              className={isRecordView ? 'text-sub-400' : 'text-primary-500'}
            >
              {isRecordView ? ' 그룹 구성원 모두' : ' 내'}
            </span>
            <span className="text-gray-90">
              {isRecordView ? (data.length === 1 ? '이' : '가') : '가'}
            </span>
            <br /> 다짐을 달성한 날이 표시돼요.
          </span>
        </section>

        {/* 그룹 카드 목록 */}
        <div className={`flex flex-wrap gap-4 pl-3 py-4`}>
          {data?.map((group) => (
            <div key={group.id} onClick={() => handleCardClick(group)}>
              <MonthlyCard
                now={now}
                group={group}
                isRecordView={isRecordView}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 클릭 시 모달 열기 */}
      {isModalOpen && selectedGroup !== null && (
        <MultiModal
          onClose={closeModal}
          now={now}
          group={selectedGroup}
          isRecordView={isRecordView}
        />
      )}
    </>
  );
};

export default MultiGroup;
