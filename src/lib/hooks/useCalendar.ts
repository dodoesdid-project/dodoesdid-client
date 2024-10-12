import {
  addDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  startOfWeek,
} from 'date-fns';

const DAY_OF_WEEK = 7;

const useCalendar = (now: Date) => {
  // 주간 달성도 달력
  const getWeekCalendar = () => {
    const weekStart = startOfWeek(now, { weekStartsOn: 1 });

    return Array.from({ length: DAY_OF_WEEK }).map((_, index) => {
      const date = addDays(weekStart, index);
      return date.getDate();
    });
  };

  // 월간 달성도 달력
  const getMonthCalendar = () => {
    const startDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startDayOfWeek = startOfWeek(startDayOfMonth, { weekStartsOn: 1 });

    const WEEK_OF_MONTH = 42; // 6주 * 7일

    return Array.from({ length: WEEK_OF_MONTH }).map((_, index) => {
      const date = addDays(startDayOfWeek, index);
      return date;
    });
  };

  return {
    getWeekCalendar,
    getMonthCalendar,
  };
};

export default useCalendar;
