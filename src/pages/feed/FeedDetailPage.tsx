import { getFeedComments, getFeedDetail } from '@lib/api/feed';

import TopBar from '@components/common/TopBar';
import FeedInput from '@components/contents/feed/FeedInput';
import CommentSheet from '@components/contents/feed/comment/CommentSheet';
import EmojiGroup from '@components/contents/feed/emoji/EmojiGroup';
import FeedCard from '@components/contents/feed/feedCard/FeedCard';

import { useQuery } from '@tanstack/react-query';

import { IComment, IReply } from '../../types/feedType';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FeedDetailPage = () => {
  const { feedId } = useParams<{ feedId: string }>();

  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const [commentState, setCommentState] = useState<IComment | IReply | null>(
    null,
  );

  const {
    data: feedDetail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['feedDetail', feedId],
    queryFn: () => getFeedDetail(feedId as string),
  });

  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
  } = useQuery({
    queryKey: ['comments', feedId],
    queryFn: () => getFeedComments(feedId as string),
  });

  const handleReply = (comment: IComment | IReply, isEdit?: boolean) => {
    if (isEdit) {
      setEdit(true);
      setCommentState(comment);
    } else {
      setReply(true);
      setCommentState(comment);
    }
  };

  // 답글 달고 다시 댓글 작성 시 댓글 형식으로
  const handleCancelReply = () => {
    setReply(false);
  };

  const handleEditComplete = () => {
    setEdit(false);
  };

  // feedId가 없을 경우 처리
  if (!feedId) {
    return <span>feedId 없음</span>;
  }

  if (isLoading || commentsLoading) return <div>로딩중..</div>;
  if (isError || commentsError) return <div>에러..</div>;

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
          {feedDetail && (
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
          {comments && (
            <CommentSheet
              comments={comments}
              feedId={feedId}
              onReply={handleReply}
            />
          )}
        </article>
        <FeedInput
          feedId={feedId}
          reply={reply}
          edit={edit}
          commentState={commentState}
          onCancelReply={handleCancelReply}
          onEditComplete={handleEditComplete}
        />
      </div>
    </>
  );
};

export default FeedDetailPage;
