import useCalendar from '@lib/hooks/useCalendar';
import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import { ReactComponent as FailedDark } from '@assets/images/statistics/failed-dark.svg';
import { ReactComponent as Failed } from '@assets/images/statistics/failed.svg';
import { ReactComponent as SuccessGroup } from '@assets/images/statistics/success-group.svg';
import { ReactComponent as SuccessIndi } from '@assets/images/statistics/success-indi.svg';

import { IWeeklyUnit } from '../../../../types/statisticsType';
import { format } from 'date-fns';

const WeeklyGroupUnit = ({ now, group, isRecordView }: IWeeklyUnit) => {
  const week = useCalendar(now).getWeekCalendar();

  const isDarkMode = useIsDarkMode();

  return (
    <>
      <section className="px-6 text-center">
        <div className="flex items-center">
          <div className="py-[7px] text-gray-100 font-semibold w-[143px] text-left dark:text-gray-30">
            <span>
              {group.name.length > 7
                ? `${group.name.substring(0, 7)}...`
                : group.name}
            </span>
          </div>

          {week.map((day, index) => {
            const dateData = format(day, 'yyyy-MM-dd');
            const dazimSuccess = group.dazimSuccessDates.includes(dateData);

            return (
              <div key={index} className="py-2 px-[3px]">
                <div className="flex justify-center items-center">
                  {dazimSuccess ? (
                    isRecordView ? (
                      <SuccessGroup />
                    ) : (
                      <SuccessIndi />
                    )
                  ) : // 다크모드일 때 FailedDark, 아닐 때 Failed 아이콘 사용
                  isDarkMode ? (
                    <FailedDark />
                  ) : (
                    <Failed />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WeeklyGroupUnit;
