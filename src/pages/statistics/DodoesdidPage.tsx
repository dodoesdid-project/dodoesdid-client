import { dazimSuccessDates } from '@lib/api/statistics';

import TopBar from '@components/common/TopBar';
import DateNavigator from '@components/contents/statistics/DateNavigator';
import RecordTap from '@components/contents/statistics/RecordTap';
import TimeTap from '@components/contents/statistics/TiimeTap';
import MultiGroup from '@components/contents/statistics/month/MultiGroup';
import SingleGroup from '@components/contents/statistics/month/SingleGroup';
import WeeklyCalendar from '@components/contents/statistics/week/WeeklyCalendar';

import { useQuery } from '@tanstack/react-query';

import { IDazimData } from '../../types/statisticsType';
import {
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import React, { useState } from 'react';

const DodoesdidPage = () => {
  const [isMonthlyView, setIsMonthlyView] = useState(false);
  const [weekDate, setWeekDate] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
  );
  const [monthDate, setMonthDate] = useState(startOfMonth(new Date()));

  const [isRecordView, setIsRecordView] = useState(false);

  // 달력 최근 주로 초기화
  const dateReset = () => {
    const currentMonth = startOfMonth(new Date());
    const currentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

    setMonthDate(currentMonth);
    setWeekDate(currentWeek);
  };

  const handleTimeClick = (isMonthly: boolean) => {
    setIsMonthlyView(isMonthly);
    setIsRecordView(false);
    dateReset();
  };

  const handleRecordClick = (isRecordView: boolean) => {
    setIsRecordView(isRecordView);
    dateReset();
  };

  const dateData = (date: Date) => format(date, 'yyyy-MM-dd');

  const dazimStartDate = isMonthlyView
    ? dateData(startOfMonth(monthDate))
    : dateData(startOfWeek(weekDate, { weekStartsOn: 1 }));
  const dazimEndDate = isMonthlyView
    ? dateData(endOfMonth(monthDate))
    : dateData(endOfWeek(weekDate, { weekStartsOn: 1 }));

  const { data } = useQuery<IDazimData[]>({
    queryKey: ['dazimData', isRecordView, isMonthlyView, weekDate, monthDate],
    queryFn: () =>
      dazimSuccessDates({
        successType: isRecordView ? 'GROUP' : 'PERSONAL',
        dazimStartDate,
        dazimEndDate,
      }),
  });

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
          data?.length === 1 ? (
            <SingleGroup
              now={monthDate}
              data={data || []}
              isRecordView={isRecordView}
            />
          ) : (
            <MultiGroup
              now={monthDate}
              data={data || []}
              isRecordView={isRecordView}
            />
          )
        ) : (
          <WeeklyCalendar
            now={weekDate}
            isRecordView={isRecordView}
            data={data || []}
          />
        )}
      </article>
    </>
  );
};

export default DodoesdidPage;
