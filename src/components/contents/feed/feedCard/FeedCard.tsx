import ActionIcons from '../feedIcons/ActionIcons';
import React from 'react';

interface IFeedCard {
  id?: string;
  name: string;
  time: string;
  profileImageUrl: string;
  dazimImageUrl: string;
  onClick?: () => void;
  overlayText?: string;
  showActionIcons?: boolean;
  reactionCount?: number;
  commentCount?: number;
}

const FeedCard = ({
  name,
  time,
  profileImageUrl,
  dazimImageUrl,
  onClick,
  overlayText,
  showActionIcons = false,
  reactionCount = 0,
  commentCount = 0,
}: IFeedCard) => {
  return (
    <article>
      <header className="flex items-center mb-4">
        <section>
          <img
            src={profileImageUrl}
            alt="프로필 이미지"
            className="rounded-full w-10 h-10"
          />
        </section>

        <section className="pl-4">
          <div>
            <span className="text-[17px] text-gray-100 font-semibold">
              {name}
            </span>
          </div>
          <div>
            <time className="text-[11px] text-gray-70">{time}</time>
          </div>
        </section>
      </header>
      <div
        onClick={onClick}
        className={`relative ${onClick ? 'cursor-pointer' : ''} `}
      >
        <img
          className="rounded-2xl w-[343px] h-[343px]"
          src={dazimImageUrl}
          alt="다짐 사진"
        />
        {overlayText && (
          <span className="text-center bg-black text-white bg-opacity-70 w-[303px] py-[11px] rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[20px] font-semibold whitespace-nowrap">
            {overlayText}
          </span>
        )}
      </div>
      {showActionIcons && (
        <ActionIcons
          reactionCount={reactionCount}
          commentCount={commentCount}
        />
      )}
    </article>
  );
};

export default FeedCard;
