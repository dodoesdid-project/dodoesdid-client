import { updateReaction } from '@lib/api/feed';

import { IEmojiGroup, ReactionType } from '../../../../types/feedType';
import EmojiItem from './EmojiItem';
import { useState } from 'react';

const EmojiGroup = ({
  fireCount,
  starCount,
  congratulationsCount,
  heartCount,
  musicCount,
  isMeReactionFire,
  isMeReactionStar,
  isMeReactionCongratulations,
  isMeReactionHeart,
  isMeReactionMusic,
  feedId,
}: IEmojiGroup) => {
  const [clickedStates, setClickedStates] = useState({
    FIRE: isMeReactionFire,
    STAR: isMeReactionStar,
    CONGRATULATIONS: isMeReactionCongratulations,
    HEART: isMeReactionHeart,
    MUSIC: isMeReactionMusic,
  });

  const [counts, setCounts] = useState({
    FIRE: fireCount,
    STAR: starCount,
    CONGRATULATIONS: congratulationsCount,
    HEART: heartCount,
    MUSIC: musicCount,
  });

  const handleEmojiClick = (reactionType: ReactionType) => {
    // 클릭 상태 토글
    const newClickedState = !clickedStates[reactionType];

    // 카운트 증가 또는 감소
    const newCount = counts[reactionType] + (newClickedState ? 1 : -1);

    setClickedStates({
      ...clickedStates,
      [reactionType]: newClickedState,
    });

    setCounts({
      ...counts,
      [reactionType]: newCount,
    });

    // 서버에 리액션 전송
    updateReaction(feedId, reactionType)
      .then(() => {
        console.log(`${reactionType} 리액션 업데이트 성공`);
      })
      .catch((error) => {
        console.error(`${reactionType} 리액션 업데이트 실패`, error);
      });
  };

  const emojis = [
    {
      type: 'FIRE' as ReactionType,
      count: counts.FIRE,
      isClicked: clickedStates.FIRE,
    },
    {
      type: 'STAR' as ReactionType,
      count: counts.STAR,
      isClicked: clickedStates.STAR,
    },
    {
      type: 'CONGRATULATIONS' as ReactionType,
      count: counts.CONGRATULATIONS,
      isClicked: clickedStates.CONGRATULATIONS,
    },
    {
      type: 'HEART' as ReactionType,
      count: counts.HEART,
      isClicked: clickedStates.HEART,
    },
    {
      type: 'MUSIC' as ReactionType,
      count: counts.MUSIC,
      isClicked: clickedStates.MUSIC,
    },
  ];

  return (
    <div className="flex gap-3">
      {emojis.map((emoji) => (
        <EmojiItem
          key={emoji.type}
          emojiType={emoji.type}
          count={emoji.count}
          isClicked={emoji.isClicked}
          onClick={() => handleEmojiClick(emoji.type)}
        />
      ))}
    </div>
  );
};

export default EmojiGroup;
