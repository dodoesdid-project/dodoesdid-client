import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const HomeTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  // 자정까지 남은 시간을 계산하는 함수
  const calculateTimeLeftUntilMidnight = () => {
    const now = dayjs();
    const nextMidnight = dayjs().endOf('day').add(1, 'second'); // 자정 00:00:00
    const difference = nextMidnight.diff(now, 'second');
    return difference;
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 자정까지 남은 시간을 설정
    setTimeLeft(calculateTimeLeftUntilMidnight());

    // 1초마다 타이머 업데이트
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // 자정에 도달하면 타이머를 리셋 (다시 24시간)
          return calculateTimeLeftUntilMidnight();
        }
        return prev - 1; // 1초씩 감소
      });
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(intervalId);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <p className="text-primary text-[32px] font-bold text-center mb-[8px] dark:text-primary-200">
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
      {String(seconds).padStart(2, '0')}
    </p>
  );
};

export default HomeTimer;
