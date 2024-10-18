import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import { ReactComponent as XIconDark } from '@assets/images/statistics/x-icon-dark.svg';
import { ReactComponent as XIcon } from '@assets/images/statistics/x-icon.svg';

import { IMultiModal } from '../../../../types/statisticsType';
import SingleDetail from './SingleDetail';

const MultiModal = ({ onClose, now, group, isRecordView }: IMultiModal) => {
  const isDarkMode = useIsDarkMode();
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white left-[50%] translate-x-[-50%] w-full desktop:w-[373px] dark:bg-black">
      <div className="flex items-center justify-between pt-[10px] px-[10px]">
        <button onClick={onClose}>
          {isDarkMode ? <XIconDark /> : <XIcon />}
        </button>

        <div className="flex-1 flex justify-center items-center">
          <span className="text-[17px] text-gray-100 font-semibold pr-5 dark:text-gray-30">
            {group.name}
          </span>
        </div>
      </div>

      <div className="text-center">
        <SingleDetail
          now={now}
          successDates={group.dazimSuccessDates}
          isRecordView={isRecordView}
          className="text-base pt-[3px]"
        />
      </div>
    </div>
  );
};

export default MultiModal;
