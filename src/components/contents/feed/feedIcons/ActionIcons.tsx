import { ReactComponent as CommentIcon } from '@assets/images/feed/feed-comment.svg';
import { ReactComponent as SmileIcon } from '@assets/images/feed/feed-smile.svg';

import { IActionIcons } from '../../../../types/feedType';

const ActionIcons = ({
  reactionCount,
  commentCount,
  onClick,
}: IActionIcons) => {
  return (
    <>
      <div onClick={onClick} className="flex items-center gap-2 my-4 ">
        <button className="flex items-center justify-center h-[36px] text-base bg-gray-40 font-semibold text-gray-100 gap-[6px] px-3 rounded-full dark:text-gray-30 dark:bg-[#2A2A2A]">
          <SmileIcon />
          <span>{reactionCount}</span>
        </button>
        <button className="flex items-center justify-center h-[36px] text-base bg-gray-40 font-semibold text-gray-100 gap-[3px] px-3 rounded-full dark:text-gray-30 dark:bg-[#2A2A2A]">
          <CommentIcon />
          <span>{commentCount}</span>
        </button>
      </div>
    </>
  );
};

export default ActionIcons;
