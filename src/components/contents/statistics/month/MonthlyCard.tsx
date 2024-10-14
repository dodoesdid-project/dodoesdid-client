import { ReactComponent as RightArrow } from '@assets/images/statistics/right-arrow.svg';

import { IMonthlyCard } from '../../../../types/statisticsType';
import { addDays, format, startOfMonth } from 'date-fns';

const MonthlyCard = ({ now, group, isRecordView }: IMonthlyCard) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white border-[0.5px] border-gray-40 px-3 cursor-pointer">
      <section className="w-full">
        <div className="text-[17px] font-semibold py-3 px-1 flex items-center justify-between">
          <span className="truncate w-full">
            {group.name.length > 7
              ? `${group.name.substring(0, 7)}...`
              : group.name}
          </span>
          <RightArrow />
        </div>

        <div className="flex flex-col items-center justify-center ">
          {/* 6주차로 게산 -> 5주차로 하면 규격에서 벗어날 때가 있음 */}
          {Array.from({ length: 6 }).map((_, weekIndex) => (
            <div className="flex" key={weekIndex}>
              {/* 일주일에 7일 정렬 */}
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const startDate = startOfMonth(now);
                const dayDifference = weekIndex * 7 + dayIndex;
                const date = addDays(startDate, dayDifference);
                const day = date.getDate();
                const dateData = format(date, 'yyyy-MM-dd');
                const thisMonth = date.getMonth() === now.getMonth();

                return (
                  <div key={`${weekIndex}-${dayIndex}`}>
                    {thisMonth ? (
                      <div
                        className={`text-white text-[11px] font-semibold rounded-[4px] w-[18px] h-[18px] flex items-center justify-center m-[1px] pt-[3px] ${
                          group.dazimSuccessDates.includes(dateData)
                            ? isRecordView
                              ? 'bg-sub-400'
                              : 'bg-primary-500'
                            : 'bg-gray-60'
                        }`}
                      >
                        {day}
                      </div>
                    ) : (
                      <div className="w-[18px] h-[18px] m-[1px]"></div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MonthlyCard;
