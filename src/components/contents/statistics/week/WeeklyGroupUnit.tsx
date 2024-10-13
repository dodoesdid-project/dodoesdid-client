import useCalendar from '@lib/hooks/useCalendar';

import { ReactComponent as Failed } from '@assets/images/statistics/failed.svg';
import { ReactComponent as SuccessIndi } from '@assets/images/statistics/success-indi.svg';

interface IWeeklyCalendar {
  now: Date;
}
const WeeklyGroupUnit = ({ now }: IWeeklyCalendar) => {
  const week = useCalendar(now).getWeekCalendar();
  return (
    <>
      <section className="px-6 text-center">
        {/* 날짜 표시 */}
        <div className="flex items-center">
          <div className="py-[7px] text-gray-100 font-semibold w-[143px] text-left ">
            <span>1일 1다짐</span>
          </div>

          {week.map((day, index) => (
            <div key={index} className="py-2 px-[3px]">
              <div className={`flex justify-center items-center`}>
                {day === 3 ? <SuccessIndi /> : <Failed />}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default WeeklyGroupUnit;
