import {
  IComment,
  IFeed,
  IMessageResponse,
  ReactionType,
} from '../../types/feedType';
import { defaultAxios } from './deafultAxios';

// 피드 목록 조회
export const getFeeds = async (): Promise<IFeed[]> => {
  try {
    const res = await defaultAxios.get<IFeed[]>('/api/v1/feeds');
    return res.data;
  } catch (err) {
    console.error('err feed', err);
    throw err;
  }
};

// 피드 상세 데이터 조회
export const getFeedDetail = async (feedId: string): Promise<IFeed> => {
  try {
    const res = await defaultAxios.get<IFeed>(`/api/v1/feed/${feedId}`);
    return res.data;
  } catch (err) {
    console.error('err feed detail', err);
    throw err;
  }
};

// 피드 리액션 토글
export const updateReaction = async (
  feedId: string,
  reactionType: ReactionType,
) => {
  try {
    const response = await defaultAxios.post(
      `/api/v1/feed/${feedId}/reaction-toggle`,
      {
        reactionType,
      },
    );
    return response.data;
  } catch (error) {
    console.error('리액션 업데이트 실패:', error);
    throw error;
  }
};

// 피드 댓글, 대댓글 불러오기
export const getFeedComments = async (feedId: string): Promise<IComment[]> => {
  try {
    const res = await defaultAxios.get<IComment[]>(
      `/api/v1/feed/${feedId}/comment`,
    );
    return res.data;
  } catch (err) {
    console.error('err feed comments', err);
    throw err;
  }
};

// 피드에 댓글 추가하기
export const addFeedComment = async (
  feedId: string,
  content: string,
): Promise<IMessageResponse> => {
  try {
    const res = await defaultAxios.post<IMessageResponse>(
      `/api/v1/feed/${feedId}/comment`,
      { content },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (err) {
    console.error('err feed comment', err);
    throw err;
  }
};

// 피드에 대댓글 추가하기
export const addCommentReply = async (
  commentId: string,
  content: string,
): Promise<IMessageResponse> => {
  try {
    const res = await defaultAxios.post<IMessageResponse>(
      `/api/v1/comment/${commentId}/reply`,
      { content },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (err) {
    console.error('err comment reply', err);
    throw err;
  }
};

// 댓글 대댓글 수정하기
export const editComment = async (
  commentId: string,
  content: string,
): Promise<IMessageResponse> => {
  try {
    const res = await defaultAxios.put<IMessageResponse>(
      `/api/v1/comment/${commentId}`,
      { content },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (err) {
    console.error('err comment edit', err);
    throw err;
  }
};

// 댓글 대댓글 삭제하기
export const deleteComment = async (
  commentId: string,
): Promise<IMessageResponse> => {
  try {
    const res = await defaultAxios.delete<IMessageResponse>(
      `/api/v1/comment/${commentId}`,
    );
    return res.data;
  } catch (err) {
    console.error('err comment delete', err);
    throw err;
  }
};
