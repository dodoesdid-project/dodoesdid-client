import { ITap } from '../../../types/statisticsType';

const RecordTap = ({ title, isActive, onClick }: ITap) => {
  return (
    <div className="w-full bg-gray-30 rounded-lg">
      <div className="flex justify-center text-center rounded-lg ">
        <button
          onClick={onClick}
          className={`py-3 px-[52px]  rounded-lg w-full font-semibold ${isActive ? 'bg-white text-gray-100' : ' text-gray-70'}`}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
export default RecordTap;
