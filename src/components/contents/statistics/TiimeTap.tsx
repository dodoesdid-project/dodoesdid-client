import { ITap } from '../../../types/statisticsType';

const TimeTap = ({ title, isActive, onClick }: ITap) => {
  return (
    <div
      className={`cursor-pointer font-semibold px-12 pb-[10px] ${isActive ? 'text-gray-100 border-b-2 border-black' : 'text-gray-70'}`}
      onClick={onClick}
    >
      <span>{title}</span>
    </div>
  );
};

export default TimeTap;
