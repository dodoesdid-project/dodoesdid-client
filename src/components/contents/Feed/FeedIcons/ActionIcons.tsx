import { ReactComponent as CommentIcon } from '@assets/images/feed/feed-comment.svg';
import { ReactComponent as SmileIcon } from '@assets/images/feed/feed-smile.svg';

const ActionIcons = () => {
  return (
    <>
      <div className="flex items-center gap-2 my-4 ">
        <button className="flex items-center justify-center h-[36px] text-base bg-gray-40 font-semibold text-gray-100 gap-[6px] px-3 rounded-full">
          <SmileIcon />
          <span>0</span>
        </button>
        <button className="flex items-center justify-center h-[36px] text-base bg-gray-40 font-semibold text-gray-100 gap-[3px] px-3 rounded-full">
          <CommentIcon />
          <span>+5</span>
        </button>
      </div>
    </>
  );
};
export default ActionIcons;
