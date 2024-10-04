import { ReactComponent as CongratsEmoji } from '@assets/images/feed/congrats-emoji.svg';
import { ReactComponent as FireEmoji } from '@assets/images/feed/fire-emoji.svg';
import { ReactComponent as HeartEmoji } from '@assets/images/feed/heart-emoji.svg';
import { ReactComponent as NoteEmoji } from '@assets/images/feed/note-emoji.svg';
import { ReactComponent as ShinyEmoji } from '@assets/images/feed/shiny-emoji.svg';

import { IEmojiItem, ReactionType } from '../../../../types/feedType';

const EmojiItem = ({ emojiType, count, isClicked, onClick }: IEmojiItem) => {
  const emojis = {
    FIRE: <FireEmoji />,
    STAR: <ShinyEmoji />,
    CONGRATULATIONS: <CongratsEmoji />,
    HEART: <HeartEmoji />,
    MUSIC: <NoteEmoji />,
  };

  return (
    <button
      className={`flex bg-gray-40 px-[10px] h-[36px] rounded-full justify-center items-center border ${
        isClicked ? 'border-sub-300' : 'border-gray-40'
      }`}
      onClick={onClick}
    >
      {emojis[emojiType]}
      {count > 0 && (
        <span className="pl-[6px] text-gray-100 font-semibold">{count}</span>
      )}
    </button>
  );
};

export default EmojiItem;
