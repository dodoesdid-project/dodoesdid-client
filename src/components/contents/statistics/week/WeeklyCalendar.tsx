import { IWeeklyCalendar } from '../../../../types/statisticsType';
import WeeklyGroupUnit from './WeeklyGroupUnit';
import React from 'react';

const WeeklyCalendar = ({ now, isRecordView, data }: IWeeklyCalendar) => {
  const dayOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

  const textDevision = (isRecordView: boolean) => {
    return isRecordView ? (
      <span className="text-sub-500"> 그룹 구성원 모두</span>
    ) : (
      <span className="text-primary-500"> 내</span>
    );
  };

  return (
    <div className="w-full text-center bg-white rounded-2xl h-full dark:bg-black">
      <section className="pt-8 px-4">
        <span className="font-semibold text-gray-100 dark:text-gray-30">
          한 주 동안
          <span className="font-semibold">{textDevision(isRecordView)}</span>가
          <br /> 다짐을 달성한 날이 표시돼요.
        </span>
      </section>

      <div className="border-t border-gray-30 my-5 mx-4 dark:border-[#202020]"></div>

      {/* 요일 헤더 */}
      <section className="flex justify-end px-6">
        {dayOfWeek.map((day, index) => (
          <div
            key={index}
            className="flex pl-1 pr-2 py-2 text-gray-70 dark:text-gray-60"
          >
            {day}
          </div>
        ))}
      </section>

      {/* 유닛 단위 그룹 */}
      {data?.map((group) => (
        <WeeklyGroupUnit
          key={group.id}
          now={now}
          group={group}
          isRecordView={isRecordView}
        />
      ))}
    </div>
  );
};

export default WeeklyCalendar;
