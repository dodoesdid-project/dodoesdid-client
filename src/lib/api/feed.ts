import { IFeed, ReactionType } from '../../types/feedType';
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
