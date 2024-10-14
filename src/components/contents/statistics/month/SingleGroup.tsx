import { IGroupDetail } from '../../../../types/statisticsType';
import SingleDetail from './SingleDetail';

const SingleGroup = ({ now, data, isRecordView }: IGroupDetail) => {
  return (
    <div className="w-full text-center rounded-t-2xl bg-gray-30 ">
      <section className="pt-2 pb-3 px-4 bg-white ">
        <span className="font-semibold text-gray-90">
          한 달 동안
          <span className={isRecordView ? 'text-sub-400' : 'text-primary-500'}>
            {isRecordView ? ` ${data[0].name} 그룹` : ' 내'}
          </span>
          <span className="text-gray-90">
            {isRecordView ? (data.length === 1 ? '이' : '가') : '가'}
          </span>
          <br /> 다짐을 달성한 날이 표시돼요.
        </span>
      </section>

      <SingleDetail
        now={now}
        successDates={data[0].dazimSuccessDates}
        isRecordView={isRecordView}
        className="text-[11px]"
      />
    </div>
  );
};

export default SingleGroup;
