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

export interface IFeedCard {
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
  onClick?: () => void;
}
export interface IComment {
  id: string;
  content: string;
  createAt: string;
  updateAt: string;
  user: IUser;
  replies?: IReply[];
}
export interface IReply {
  id: string;
  parentId: string;
  content: string;
  createAt: string;
  updateAt: string;
  user?: IUser;
}

export interface IMessageResponse {
  message: string;
}

export interface ICommentSheet {
  comments: IComment[];
  feedId: string;
  onReply: (comment: IComment | IReply, isEditMode?: boolean) => void;
}

export interface ICommentAndReply {
  comment: IComment | IReply;
  feedId: string;
  isReply?: boolean;
  onReply?: (comment: IComment | IReply, isEditMode?: boolean) => void;
}

export interface IFeedInput {
  feedId: string;
  reply: boolean;
  edit: boolean;
  commentState: IComment | IReply | null;
  onCancelReply: () => void;
  onEditComplete: () => void;
}
