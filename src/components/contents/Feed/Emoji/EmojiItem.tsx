import { ReactComponent as CongratsEmoji } from '@assets/images/feed/congrats-emoji.svg';
import { ReactComponent as FireEmoji } from '@assets/images/feed/fire-emoji.svg';
import { ReactComponent as HeartEmoji } from '@assets/images/feed/heart-emoji.svg';
import { ReactComponent as NoteEmoji } from '@assets/images/feed/note-emoji.svg';
import { ReactComponent as ShinyEmoji } from '@assets/images/feed/shiny-emoji.svg';

import { useState } from 'react';

const emojis = [FireEmoji, ShinyEmoji, CongratsEmoji, HeartEmoji, NoteEmoji];

const EmojiItem = () => {
  const [isClicked, setIsClicked] = useState<number[]>([]); // 이모지 클릭
  const [count, setCount] = useState<number[]>([0, 0, 0, 0, 0]);

  const emojiClick = (index: number) => {
    const countControl = [...count];

    if (!isClicked.includes(index)) {
      // 클릭 시 +1
      countControl[index] += 1;
      setIsClicked([...isClicked, index]);
    } else {
      // 클릭 해제 시 -1
      countControl[index] -= 1;
      setIsClicked(isClicked.filter((i) => i !== index));
    }
    setCount(countControl);
  };

  return (
    <div className="flex gap-3">
      {emojis.map((Emoji, index) => (
        <button
          className={`flex bg-gray-40 px-[10px] h-[36px] rounded-full justify-center items-center border ${
            isClicked.includes(index) ? 'border-sub-300' : 'border-gray-40'
          }`}
          onClick={() => emojiClick(index)}
          key={index}
        >
          <Emoji />
          {count[index] > 0 ? (
            <span className="pl-[6px] text-gray-100 font-semibold">
              {count[index]}
            </span>
          ) : (
            <span />
          )}
        </button>
      ))}
    </div>
  );
};

export default EmojiItem;
