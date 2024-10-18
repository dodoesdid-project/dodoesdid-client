import { ITap } from '../../../types/statisticsType';

const TimeTap = ({ title, isActive, onClick }: ITap) => {
  return (
    <div
      className={`cursor-pointer font-semibold px-12 pb-[10px]  ${isActive ? 'text-gray-100 border-b-2 dark:border-gray-30 border-black dark:text-gray-30 ' : 'border-b-[1px] dark:border-gray-100 border-gray-30 dark:text-gray-60 text-gray-70'}`}
      onClick={onClick}
    >
      <span className="">{title}</span>
    </div>
  );
};

export default TimeTap;
