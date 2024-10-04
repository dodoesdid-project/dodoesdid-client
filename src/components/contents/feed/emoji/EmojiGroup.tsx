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

    const newCount = counts[reactionType] + (newClickedState ? 1 : -1);

    setClickedStates({
      ...clickedStates,
      [reactionType]: newClickedState,
    });

    setCounts({
      ...counts,
      [reactionType]: newCount,
    });

    updateReaction(feedId, reactionType);
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
