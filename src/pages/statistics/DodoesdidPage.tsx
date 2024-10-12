import TopBar from '@components/common/TopBar';
import DateNavigator from '@components/contents/statistics/DateNavigator';
import RecordTap from '@components/contents/statistics/RecordTap';
import TimeTap from '@components/contents/statistics/TiimeTap';
import MonthlyCardsContainer from '@components/contents/statistics/month/MonthlyCardsContainer';
import WeeklyCalendar from '@components/contents/statistics/week/WeeklyCalendar';

import { startOfMonth, startOfWeek } from 'date-fns';
import React, { useState } from 'react';

const DodoesdidPage: React.FC = () => {
  const startWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const startMonth = startOfMonth(new Date());
  const [isMonthlyView, setIsMonthlyView] = useState(false);
  const [weekDate, setWeekDate] = useState(startWeek);
  const [monthDate, setMonthDate] = useState(startMonth);

  const [isRecordView, setIsRecordView] = useState(false);

  const handleTimeClick = (isMonthly: boolean) => {
    setIsMonthlyView(isMonthly);
  };

  const handleRecordClick = (isRecordView: boolean) => {
    // 클릭된 탭에 따라 상태 변경
    setIsRecordView(isRecordView);
  };

  return (
    <>
      <TopBar backLink="" title="두더지" close={false} />

      <article className="bg-white mx-auto my-0 w-full h-full">
        {/* 주간 달성도 월간 달성도 */}
        <section className="text-center bg-white">
          <div className="flex justify-center border-b-gray-70">
            <TimeTap
              title="주간 달성도"
              isActive={!isMonthlyView}
              onClick={() => handleTimeClick(false)}
            />
            <TimeTap
              title="월간 달성도"
              isActive={isMonthlyView}
              onClick={() => handleTimeClick(true)}
            />
          </div>
        </section>

        {/* 개인 기록, 그룹 기록 */}
        <div className="bg-white pt-[18px]">
          <div className="flex mx-4 p-1 bg-gray-30 rounded-lg">
            <RecordTap
              title="개인 기록"
              isActive={!isRecordView}
              onClick={() => handleRecordClick(false)}
            />
            <RecordTap
              title="그룹 기록"
              isActive={isRecordView}
              onClick={() => handleRecordClick(true)}
            />
          </div>
        </div>
        {/* 날짜 네비게이션 */}
        <DateNavigator
          isMonthlyView={isMonthlyView}
          now={isMonthlyView ? monthDate : weekDate}
          setNow={isMonthlyView ? setMonthDate : setWeekDate}
        />

        {/* 캘린더 렌더링 */}
        {isMonthlyView ? (
          <MonthlyCardsContainer now={monthDate} />
        ) : (
          <WeeklyCalendar now={weekDate} />
        )}
        {/* 개인, 그룹일 때 상태관리해서 클릭 시 isActive 변경 */}
      </article>
    </>
  );
};

export default DodoesdidPage;
