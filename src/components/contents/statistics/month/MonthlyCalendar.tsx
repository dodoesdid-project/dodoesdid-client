import useCalendar from '@lib/hooks/useCalendar';

import { ReactComponent as Failed } from '@assets/images/statistics/failed-big.svg';
import { ReactComponent as SuccessGroup } from '@assets/images/statistics/success-group-big.svg';

import { format } from 'date-fns';

interface IGroupDetail {
  now: Date;
  cardId: number;
}

const MonthlyCalendar = ({ now }: IGroupDetail) => {
  const calendar = useCalendar(now);
  const monthCalendar = calendar.getMonthCalendar();
  const week = ['월', '화', '수', '목', '금', '토', '일'];

  const successData: { [key: string]: number } = {
    '2024-10-01': 1,
    '2024-10-02': 0,
    '2024-10-03': 1,
  };

  return (
    <div className="w-full text-center bg-white px-9 rounded-t-2xl">
      <section className="pt-8 px-4">
        <span className="font-semibold text-gray-90">
          한 주 동안 <span className="text-primary-500">내</span>
          <br /> 다짐을 달성한 날이 표시돼요.
        </span>
      </section>

      <div className="border-t border-gray-30 my-5 mx-4"></div>

      {/* 월 ~ 일 뿌려주기*/}
      <section>
        <div className="flex mb-3">
          {week.map((day, index) => (
            <div key={index} className="flex-1 p-2 text-[11px]">
              {day}
            </div>
          ))}
        </div>
      </section>

      <section>
        {/* 최대 6주차로 뿌려주기 */}
        {Array.from({ length: 6 }).map((_, weekIndex) => (
          <div className="flex" key={weekIndex}>
            {monthCalendar
              .slice(weekIndex * 7, weekIndex * 7 + 7)
              .map((date, dayIndex) => {
                const dateData = format(date, 'yyyy-MM-dd');
                const nowMonth = date.getMonth() === now.getMonth();

                return (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`flex-1 flex flex-col items-center justify-center ${!nowMonth ? 'invisible' : ''}`}
                  >
                    {nowMonth ? (
                      <>
                        <div className="text-gray-900 text-[11px] font-semibold">
                          {date.getDate()}
                        </div>
                        <div className="pb-[18px]">
                          {/* 일단 표시용 */}
                          {successData[dateData] === 1 ? (
                            <SuccessGroup />
                          ) : (
                            <Failed />
                          )}
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                );
              })}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MonthlyCalendar;
