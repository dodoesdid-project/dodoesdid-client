import { ITap } from '../../../types/statisticsType';

const RecordTap = ({ title, isActive, onClick }: ITap) => {
  return (
    <div className="w-full bg-gray-30 rounded-lg">
      <div className="flex justify-center text-center rounded-lg ">
        <button
          onClick={onClick}
          className={`py-3 px-[52px] rounded-lg w-full font-semibold ${isActive ? 'bg-white text-gray-100 dark:bg-black dark:text-gray-30' : ' text-gray-70 dark:bg-[#2A2A2A] dark:text-gray-60'}`}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
export default RecordTap;
