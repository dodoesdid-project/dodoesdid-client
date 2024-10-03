import { getFeedDetail } from '@lib/api/feed';

import TopBar from '@components/common/TopBar';
import FeedInput from '@components/contents/feed/FeedInput';
import CommentSheet from '@components/contents/feed/comment/CommentSheet';
import EmojiGroup from '@components/contents/feed/emoji/EmojiGroup';
import FeedCard from '@components/contents/feed/feedCard/FeedCard';

import { useQuery } from '@tanstack/react-query';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FeedDetailPage = () => {
  const { feedId } = useParams<{ feedId: string }>(); // URL에서 feedId 가져오기
  const [comments, setComments] = useState<any[]>([]);
  const [isReplying, setIsReplying] = useState(false);
  const [currentComment, setCurrentComment] = useState<any>(null);

  // 피드 상세 정보 가져오기
  const {
    data: feedDetail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['feedDetail', feedId as string],
    queryFn: () => getFeedDetail(feedId as string),
    enabled: !!feedId,
  });

  // 댓글 추가 함수
  const addComment = (content: string) => {
    const newComment = {
      id: Date.now(),
      content,
      userName: '찬영',
      time: '10분 전',
      img: '',
      isReply: false,
      replies: [],
    };
    setComments((comments) => [...comments, newComment]);
  };

  const addReply = (content: string, parentId: number) => {
    const newReply = {
      id: Date.now(),
      content,
      userName: '소현',
      time: '5분 전',
      img: '',
      isReply: true,
    };
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === parentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment,
      ),
    );
    setIsReplying(false);
    setCurrentComment(null);
  };

  const handleReply = (comment: any) => {
    setIsReplying(true);
    setCurrentComment(comment);
  };

  const handleDelete = (id: number, isReply = false, parentId?: number) => {
    if (isReply && parentId) {
      setComments((comments) =>
        comments.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (reply: any) => reply.id !== id,
                ),
              }
            : comment,
        ),
      );
    } else {
      setComments((comments) =>
        comments.filter((comment) => comment.id !== id),
      );
    }
  };

  const handleEdit = (id: number, updatedContent: string) => {
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === id ? { ...comment, content: updatedContent } : comment,
      ),
    );
  };

  if (isLoading) return <div>로딩중..</div>;
  if (isError) return <div>에러..</div>;

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <TopBar backLink="/feed" title="" close={false} />
        <article className="mx-4">
          {feedDetail && (
            <FeedCard
              name={feedDetail.user.profile?.nickName || ''}
              time={feedDetail.updateAt}
              profileImageUrl={feedDetail.user.profile?.thumbnail || ''}
              dazimImageUrl={feedDetail.photo || ''}
              overlayText={feedDetail.content}
            />
          )}
          <div className="pl-1 py-4">
            <span className="text-gray-100">{feedDetail?.content}</span>
          </div>
          {feedDetail && feedId && (
            <EmojiGroup
              fireCount={feedDetail.fireCount ?? 0}
              starCount={feedDetail.starCount ?? 0}
              congratulationsCount={feedDetail.congratulationsCount ?? 0}
              heartCount={feedDetail.heartCount ?? 0}
              musicCount={feedDetail.musicCount ?? 0}
              isMeReactionFire={feedDetail.isMeReactionFire ?? false}
              isMeReactionStar={feedDetail.isMeReactionStar ?? false}
              isMeReactionCongratulations={
                feedDetail.isMeReactionCongratulations ?? false
              }
              isMeReactionHeart={feedDetail.isMeReactionHeart ?? false}
              isMeReactionMusic={feedDetail.isMeReactionMusic ?? false}
              feedId={feedId}
            />
          )}
          <div className="border-t border-gray-30 my-[10px]"></div>
          {/* 댓글, 대댓글 목록 */}
          <CommentSheet
            comments={comments}
            handleReply={handleReply}
            handleDelete={handleDelete}
          />
        </article>
        <FeedInput
          addComment={addComment}
          addReply={addReply}
          isReplying={isReplying}
          currentComment={currentComment}
        />
      </div>
    </>
  );
};

export default FeedDetailPage;
