import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import { ReactComponent as LeftArrowDark } from '@assets/images/statistics/left-dark.svg';
import { ReactComponent as RightArrowDark } from '@assets/images/statistics/right-dark.svg';
import { ReactComponent as LeftArrow } from '@assets/images/statistics/statistics-left.svg';
import { ReactComponent as RightArrow } from '@assets/images/statistics/statistics-right.svg';

import { IDateNavigator } from '../../../types/statisticsType';
import {
  addDays,
  addMonths,
  addWeeks,
  format,
  isSameMonth,
  isSameWeek,
  subMonths,
  subWeeks,
} from 'date-fns';

const DateNavigator = ({ isMonthlyView, now, setNow }: IDateNavigator) => {
  const today = new Date();

  const handlePreviousClick = () => {
    if (isMonthlyView) {
      setNow((date) => subMonths(date, 1));
    } else {
      setNow((date) => subWeeks(date, 1));
    }
  };

  const handleNextClick = () => {
    if (isMonthlyView) {
      setNow((date) => addMonths(date, 1));
    } else {
      setNow((date) => addWeeks(date, 1));
    }
  };

  const showNextButton = isMonthlyView
    ? !isSameMonth(now, today)
    : !isSameWeek(now, today, { weekStartsOn: 1 }); // weekStartsOn: 1 월요일 시작

  const isDarkMode = useIsDarkMode();

  return (
    <section className="flex items-center justify-center gap-[10px] px-5 pt-4 pb-[18px] bg-white dark:bg-black">
      <button onClick={handlePreviousClick}>
        {isDarkMode ? <LeftArrowDark /> : <LeftArrow />}
      </button>
      <span className="text-gray-90 font-semibold text-[20px] dark:text-gray-40">
        {isMonthlyView
          ? format(now, 'yyyy년 M월')
          : `${format(now, 'M월 d일')} - ${format(addDays(now, 6), 'M월 d일')}`}
      </span>
      <button
        onClick={handleNextClick}
        className={`${showNextButton ? '' : 'invisible'}`}
      >
        {isDarkMode ? <RightArrowDark /> : <RightArrow />}
      </button>
    </section>
  );
};

export default DateNavigator;
