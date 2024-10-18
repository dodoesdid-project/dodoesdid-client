import useCalendar from '@lib/hooks/useCalendar';
import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import { ReactComponent as Failed } from '@assets/images/statistics/failed-big.svg';
import { ReactComponent as FailedDark } from '@assets/images/statistics/failed-dark-big.svg';
import { ReactComponent as SuccessGroup } from '@assets/images/statistics/success-group-big.svg';
import { ReactComponent as SuccessIndi } from '@assets/images/statistics/success-indi-big.svg';

import { ISingleDetail } from '../../../../types/statisticsType';
import { format } from 'date-fns';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const SingleDetail = ({
  now,
  successDates,
  isRecordView,
  className,
}: ISingleDetail) => {
  const calendar = useCalendar(now);
  const monthCalendar = calendar.getMonthCalendar();
  const week = ['월', '화', '수', '목', '금', '토', '일'];

  const isDarkMode = useIsDarkMode();

  return (
    <>
      {/* 월 ~ 일 뿌려주기 */}
      <div className="bg-white my-3 mx-4 rounded-2xl px-[21px] py-5 dark:bg-black">
        <section>
          <div className="flex mb-3">
            {week.map((day, index) => (
              <div
                key={index}
                className="flex-1 p-2 text-[11px] dark:text-gray-30 font-semibold"
              >
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
                  const dazimSuccess = successDates.includes(dateData);

                  return (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`flex-1 flex flex-col items-center justify-center ${
                        !nowMonth ? 'invisible' : ''
                      }`}
                    >
                      {nowMonth ? (
                        <>
                          <div
                            className={twMerge(
                              `text-gray-900 font-semibold dark:text-gray-30`,
                              className,
                            )}
                          >
                            {date.getDate()}
                          </div>
                          <div className={twMerge(`pb-[18px]`, className)}>
                            {dazimSuccess ? (
                              isRecordView ? (
                                <SuccessGroup />
                              ) : (
                                <SuccessIndi />
                              )
                            ) : isDarkMode ? (
                              <FailedDark />
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
    </>
  );
};

export default SingleDetail;
