import TopBar from '@components/common/TopBar';
import DateNavigator from '@components/contents/statistics/DateNavigator';
import Tab from '@components/contents/statistics/Tap';
import GroupCardsContainer from '@components/contents/statistics/month/GroupCardsContainer';
import WeeklyCalendar from '@components/contents/statistics/week/WeeklyCalendar';

import { startOfMonth, startOfWeek } from 'date-fns';
import React, { useState } from 'react';

const DodoesdidPage: React.FC = () => {
  const startWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const startMonth = startOfMonth(new Date());
  const [isMonthlyView, setIsMonthlyView] = useState(false);
  const [weekDate, setWeekDate] = useState(startWeek);
  const [monthDate, setMonthDate] = useState(startMonth);

  const handleTabClick = (isMonthly: boolean) => {
    setIsMonthlyView(isMonthly);
  };

  return (
    <>
      <TopBar backLink="" title="두더지" close={false} />

      <article className="bg-gray-30">
        {/* 주간 달성도 월간 달성도 */}
        <section className="text-center bg-white">
          <div className="flex justify-center space-x-4">
            <Tab
              title="주간 달성도"
              isActive={!isMonthlyView}
              onClick={() => handleTabClick(false)}
            />
            <Tab
              title="월간 달성도"
              isActive={isMonthlyView}
              onClick={() => handleTabClick(true)}
            />
          </div>
        </section>

        {/* 개인 기록, 그룹 기록 */}
        <div className="px-4 pt-6 pb-2">
          <div className="flex justify-center gap-[15px] text-base">
            <button className="py-3 px-[52px] rounded-lg border border-primary-600 text-primary-700 font-semibold">
              개인 기록
            </button>
            <button className="py-3 px-[50px] rounded-lg border border-sub-500 text-sub-400 font-semibold">
              그룹 기록
            </button>
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
          <GroupCardsContainer now={monthDate} />
        ) : (
          <WeeklyCalendar now={weekDate} />
        )}
      </article>
    </>
  );
};

export default DodoesdidPage;
