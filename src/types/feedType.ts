export interface IUserProfile {
  nickName: string;
  thumbnail: string;
}

export interface IUser {
  id: string;
  profile: IUserProfile | null;
}

export interface IFeed {
  id: string;
  groupId: string;
  content: string;
  photo?: string;
  createAt: string;
  updateAt: string;
  user: IUser;

  fireCount?: number;
  starCount?: number;
  congratulationsCount?: number;
  heartCount?: number;
  musicCount?: number;
  isMeReactionFire?: boolean;
  isMeReactionStar?: boolean;
  isMeReactionCongratulations?: boolean;
  isMeReactionHeart?: boolean;
  isMeReactionMusic?: boolean;

  commentCount: number;
  reactionCount: number;
}

export type ReactionType =
  | 'FIRE'
  | 'STAR'
  | 'CONGRATULATIONS'
  | 'HEART'
  | 'MUSIC';

export interface IReactionToggle {
  reactionType: ReactionType;
  count: number;
}

export interface IEmojiGroup {
  fireCount: number;
  starCount: number;
  congratulationsCount: number;
  heartCount: number;
  musicCount: number;
  isMeReactionFire: boolean;
  isMeReactionStar: boolean;
  isMeReactionCongratulations: boolean;
  isMeReactionHeart: boolean;
  isMeReactionMusic: boolean;
  feedId: string;
}

export interface IEmojiItem {
  emojiType: ReactionType;
  count: number;
  isClicked: boolean;
  onClick: () => void;
}

export interface IActionIcons {
  reactionCount: number;
  commentCount: number;
}
