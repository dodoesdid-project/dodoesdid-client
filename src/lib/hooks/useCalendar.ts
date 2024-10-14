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
      return date;
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

export const putUpCommentTime = (past: string) => {
  const now = new Date();
  const pastDate = new Date(past);
  const seconds = differenceInSeconds(now, pastDate);
  const minutes = differenceInMinutes(now, pastDate);
  const hours = differenceInHours(now, pastDate);

  if (seconds === 0) {
    return '방금 전';
  } else if (seconds < 60) {
    return `${seconds}초 전`;
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  }
};
