import TopBar from '@components/common/TopBar';
import CommentSheet from '@components/contents/feed/comment/CommentSheet';
import EmojiGroup from '@components/contents/feed/emoji/EmojiGroup';
import FeedCard from '@components/contents/feed/feedCard/FeedCard';
import FeedInput from '@components/contents/feed/FeedInput';

import React, { useState } from 'react';

const FeedDetailPage = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [isReplying, setIsReplying] = useState(false);
  const [currentComment, setCurrentComment] = useState<any>(null);

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

  // 댓글 및 답글 삭제 로직
  const handleDelete = (id: number, isReply = false, parentId?: number) => {
    if (isReply && parentId) {
      // 답글 삭제 로직
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
      // 댓글 삭제 로직
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

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <TopBar backLink="/feed" title="" close={false} />
        <article className="mx-4">
          <FeedCard
            name="옐"
            time="1분 전"
            profileImageUrl="http://via.placeholder.com/40x40"
            dazimImageUrl="http://via.placeholder.com/362x362"
            overlayText="책 10장 읽기 성공~"
          />
          <div className="pl-1 py-4">
            <span className="text-gray-100">책 10장 읽기 성공~</span>
          </div>
          <EmojiGroup />
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
