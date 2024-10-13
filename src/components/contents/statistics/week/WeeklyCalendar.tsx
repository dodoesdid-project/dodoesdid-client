import useCalendar from '@lib/hooks/useCalendar';

import WeeklyGroupUnit from './WeeklyGroupUnit';

interface IWeeklyCalendar {
  now: Date;
}
const WeeklyCalendar = ({ now }: IWeeklyCalendar) => {
  const dayOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div className="w-full text-center bg-white rounded-2xl h-full">
      <section className="pt-8 px-4">
        <span className="font-semibold text-gray-100">
          한 주 동안 <span className="text-primary-500">내</span>가
          <br /> 다짐을 달성한 날이 표시돼요.
        </span>
      </section>

      <div className="border-t border-gray-30 my-5 mx-4"></div>

      {/* 요일 헤더 */}
      <section className="flex justify-end px-6">
        {dayOfWeek.map((day, index) => (
          <div key={index} className="flex pl-1 pr-2 py-2 text-gray-70">
            {day}
          </div>
        ))}
      </section>

      {/* 유닛 단위 그룹 */}
      <WeeklyGroupUnit now={now} />
    </div>
  );
};

export default WeeklyCalendar;
