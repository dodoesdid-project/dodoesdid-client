import { ReactComponent as XIcon } from '@assets/images/statistics/x-icon.svg';

import { IMultiModal } from '../../../../types/statisticsType';
import SingleDetail from './SingleDetail';
import React from 'react';

const MultiModal = ({ onClose, now, group, isRecordView }: IMultiModal) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white left-[50%] translate-x-[-50%] w-full desktop:w-[373px]">
      <div className="flex items-center justify-between pt-[10px] px-[10px]">
        <button onClick={onClose}>
          <XIcon />
        </button>

        <div className="flex-1 flex justify-center items-center">
          <span className="text-[17px] text-gray-100 font-semibold pr-5">
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
