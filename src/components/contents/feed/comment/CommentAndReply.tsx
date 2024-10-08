import { deleteComment } from '@lib/api/feed';
import { getUser } from '@lib/api/user';
import useDarkMode from '@lib/hooks/useDarkMode';

import { ReactComponent as EditIcon } from '@assets/images/feed/edit-icon.svg';
import { ReactComponent as TrashIcon } from '@assets/images/feed/trash-icon.svg';
import { ReactComponent as VerticalEllipsis } from '@assets/images/feed/vertical-ellipsis.svg';
import { ReactComponent as XIconDark } from '@assets/images/feed/x-icon-dark.svg';
import { ReactComponent as XIcon } from '@assets/images/feed/x-icon.svg';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ICommentAndReply } from '../../../../types/feedType';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';
import { useState } from 'react';

const CommentAndReply = ({
  comment,
  feedId,
  isReply = false,
  onReply,
}: ICommentAndReply) => {
  const queryClient = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // 댓글 수정 삭제 엑세스 제어를 위해 유저 데이터 가져옴
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const putUpCommentTime = (past: string) => {
    const now = new Date();
    const pastDate = new Date(past);
    const seconds = differenceInSeconds(now, pastDate);
    const minutes = differenceInMinutes(now, pastDate);
    const hours = differenceInHours(now, pastDate);

    if (seconds === 0) {
      return '방금 전';
    } else if (seconds < 60) {
      return `${seconds}초 전`;
    } else if (minutes < 60) {
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    }
  };

  // 댓글 삭제 뮤테이션
  const deleteCommentMutation = useMutation({
    mutationFn: () => deleteComment(comment.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', feedId] });
    },
    onError: (error) => {
      console.error('댓글 삭제 실패:', error);
    },
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openDeleteModal = () => {
    closeModal();
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleEditClick = () => {
    onReply && onReply(comment, true);
    closeModal();
  };

  const handleDeleteClick = () => {
    deleteCommentMutation.mutate();
    setDeleteModalOpen(false);
  };

  const isDarkMode = useDarkMode();

  return (
    <>
      <article
        className={`flex ${isReply ? 'pl-12' : ''} ${isReply ? 'mt-3' : ''}`}
      >
        <section className="flex-shrink-0 w-10 h-10">
          <img
            className="rounded-full border-[1px] border-solid border-[#ddd] dark:border-[#444]"
            src={comment.user?.profile?.thumbnail}
            alt="Profile"
          />
        </section>
        <section className="pl-2 w-full">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-100 font-semibold dark:text-gray-30">
                {comment.user?.profile?.nickName}
              </span>
              <time className="pl-2 text-gray-60 text-[11px] dark:text-gray-70">
                {putUpCommentTime(comment.updateAt)}
              </time>
            </div>

            {comment.user?.id === user?.data.id && (
              <button onClick={openModal}>
                <VerticalEllipsis />
              </button>
            )}
          </div>

          <div>
            <span className="break-words dark:text-gray-30">
              {comment.content}
            </span>
          </div>

          {!isReply && (
            <button
              className="font-semibold text-gray-60 text-[11px] cursor-pointer dark:text-gray-70"
              onClick={() => onReply && onReply(comment)}
            >
              답글 달기
            </button>
          )}
        </section>
      </article>

      {/* 수정/삭제 모달 */}
      {modalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-8 ">
            <div className=" mx-auto p-4 rounded-lg max-w-md w-full">
              <button
                className="flex justify-center bg-[#E2F8FF] text-primary-700 w-full text-left px-4 py-[12px] font-semibold rounded-lg gap-2 dark:bg-[#1E3060]"
                onClick={handleEditClick}
              >
                <EditIcon />
                댓글 수정
              </button>
              <button
                className="flex justify-center bg-primary-500 text-white w-full text-left px-4 py-[12px] font-semibold rounded-lg mt-3 gap-2"
                onClick={openDeleteModal}
              >
                <TrashIcon />
                댓글 삭제
              </button>
            </div>
          </div>
        </>
      )}

      {/* 삭제 확인 모달 */}
      {deleteModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={closeDeleteModal}
          ></div>

          <div className="fixed inset-x-0 bottom-0 px-4 rounded-t-xl p-4 z-50 dark:bg-[#2A2A2A] mx-auto max-w-md w-full">
            <div className="flex justify-end">
              <button onClick={closeDeleteModal}>
                {isDarkMode ? <XIconDark /> : <XIcon />}
              </button>
            </div>

            <p className="text-center text-gray-100 font-semibold pt-[32px] pb-[51px] dark:text-gray-30">
              댓글을 삭제하시겠습니까?
            </p>

            <div className="p-4">
              <button
                className="w-full bg-primary-500 text-white font-semibold rounded-lg py-3"
                onClick={handleDeleteClick}
              >
                삭제
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CommentAndReply;
