import { ReactComponent as XIcon } from '@assets/images/statistics/x-icon.svg';

import SingleDetail from './SingleDetail';

interface IDetailProps {
  onClose: () => void;
  now: Date;
  cardId: number;
}

const MultiModal = ({ onClose, now, cardId }: IDetailProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="flex items-center justify-between pt-[10px] px-[10px]">
        <button onClick={onClose}>
          <XIcon />
        </button>

        <div className="flex-1 flex justify-center items-center">
          <span className="text-[17px] text-gray-100 font-semibold pr-5">
            1일 1다짐
          </span>
        </div>
      </div>

      <div className="text-center">
        <SingleDetail
          now={now}
          cardId={cardId}
          className="text-base pt-[3px]"
        />
      </div>
    </div>
  );
};

export default MultiModal;
