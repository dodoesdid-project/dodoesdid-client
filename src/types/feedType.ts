export interface IFeedItem {
  userName: string;
  userProfileImageUrl: string;
  dazimContent: string;
  dazimContentId: string;
  dazimFileUrl: string;
  dazimTimeAgo: string;
  dazimLikeCount: number;
  totalCommentAndReplyCount: number;
}

export interface IFeedApiResponse {
  code: number;
  message: string;
  data: IFeedItem[];
}
