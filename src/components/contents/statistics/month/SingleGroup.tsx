import { dazimSuccessDates } from '@lib/api/statistics';

import { useQuery } from '@tanstack/react-query';

import SingleDetail from './SingleDetail';

interface IGroupDetail {
  now: Date;
  cardId: number;
}
const startDate = '2024-10-04'; // 예시로 고정된 날짜
const endDate = '2024-10-13'; // 예시로 고정된 날짜
const successType = 'PERSONAL'; // 예시로 고정된 성공 유형

const {
  data: groups,
  error,
  isLoading,
} = useQuery({
  queryKey: ['groupSuccessDates', { startDate, endDate, successType }], // queryKey
  queryFn: () =>
    dazimSuccessDates({
      // queryFn
      startDate,
      endDate,
      successType,
    }),
});

const SingleGroup = ({ now, cardId }: IGroupDetail) => {
  return (
    <div className="w-full text-center rounded-t-2xl bg-gray-30 ">
      <section className="pt-2 pb-3 px-4 bg-white ">
        <span className="font-semibold text-gray-90">
          한 주 동안 <span className="text-primary-500">내</span>
          <br /> 다짐을 달성한 날이 표시돼요.
        </span>
      </section>

      <SingleDetail now={now} cardId={cardId} className="text-[11px]" />
    </div>
  );
};

export default SingleGroup;
