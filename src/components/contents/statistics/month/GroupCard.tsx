import { format, getDaysInMonth } from 'date-fns';

interface IGroupDetail {
  now: Date;
}

const GroupCard = ({ now }: IGroupDetail) => {
  const daysInMonth = getDaysInMonth(now);

  // 날짜 문자열로 데이터 받기?
  const successData: { [key: string]: number } = {
    '2024-10-01': 1,
    '2024-10-02': 0,
    '2024-10-03': 1,
  };

  return (
    <div className="flex flex-col items-center justify-center text-center w-[154px] h-[154px] rounded-2xl bg-white shadow-md">
      <section className="w-full">
        <div className="font-semibold px-4 py-3">1일 1다짐</div>

        <div className="flex flex-col items-center justify-center">
          {/* 6주차로 게산 -> 5주차로 하면 규격에서 벗어날 때가 있음 */}
          {Array.from({ length: 6 }).map((_, weekIndex) => (
            <div className="flex" key={weekIndex}>
              {/* 일주일에 7일 정렬 */}
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const day = weekIndex * 7 + dayIndex + 1;
                const dateData = format(
                  new Date(now.getFullYear(), now.getMonth(), day),
                  'yyyy-MM-dd',
                );
                const thisMonth = day <= daysInMonth;

                return (
                  <div key={`${weekIndex}-${dayIndex}`}>
                    {thisMonth ? (
                      <div
                        className={`text-white text-[11px] font-semibold rounded-[4px] w-[18px] h-[18px] flex items-center justify-center m-[1px] ${
                          // 일단 표시용
                          successData[dateData] === 1
                            ? 'bg-sub-400'
                            : 'bg-gray-60'
                        }`}
                      >
                        {day}
                      </div>
                    ) : (
                      // > 버튼 규격 차지용
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

export default GroupCard;
