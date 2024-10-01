import { ReactComponent as EditIcon } from '@assets/images/feed/edit-icon.svg';
import { ReactComponent as TrashIcon } from '@assets/images/feed/trash-icon.svg';
import { ReactComponent as VerticalEllipsis } from '@assets/images/feed/vertical-ellipsis.svg';
import { ReactComponent as XIcon } from '@assets/images/feed/x-icon.svg';

import { useState } from 'react';

interface ICommentItem {
  id: number;
  userName: string;
  time: string;
  content: string;
  isReply?: boolean;
  handleReply?: () => void;
  handleDelete?: (commentId: number) => void;
  handleEdit?: (updatedContent: string) => void;
}

const CommentAndReply = ({
  id,
  userName,
  time,
  content,
  isReply = false,
  handleReply,
  handleDelete,
  handleEdit,
}: ICommentItem) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDeleteConfirmModal = () => {
    closeModal();
    setIsDeleteConfirmOpen(true);
  };

  const closeDeleteConfirmModal = () => {
    setIsDeleteConfirmOpen(false);
  };

  return (
    <>
      <article
        className={`flex ${isReply ? 'pl-12' : ''} ${isReply ? 'mt-3' : ''}`}
      >
        <section>
          <img
            className="rounded-2xl"
            src="http://via.placeholder.com/40x40"
            alt="Profile"
          />
        </section>
        <section className="pl-2 w-full">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-100 font-semibold">{userName}</span>
              <time className="pl-2 text-gray-60 text-[11px]">{time}</time>
            </div>
            <button onClick={openModal}>
              <VerticalEllipsis />
            </button>
          </div>

          <div>
            <span className="break-words">{content}</span>
          </div>

          {!isReply && (
            <button
              className="font-semibold text-gray-60 text-[11px] cursor-pointer"
              onClick={handleReply}
            >
              답글 달기
            </button>
          )}
        </section>
      </article>

      {/* 수정/삭제 모달 */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-x-0 bottom-0 px-4 rounded-t-xl p-4 z-50">
            <button
              className="flex justify-center bg-[#E2F8FF] text-primary-700 w-full text-left px-4 py-[12px] font-semibold rounded-lg gap-2"
              onClick={() => handleEdit && handleEdit('수정된 내용')}
            >
              <EditIcon />
              댓글 수정
            </button>
            <button
              className="flex justify-center bg-primary-500 text-white w-full text-left px-4 py-[12px] font-semibold rounded-lg mt-3 gap-2"
              onClick={openDeleteConfirmModal}
            >
              <TrashIcon />
              댓글 삭제
            </button>
          </div>
        </>
      )}

      {/* 삭제 확인 모달 */}
      {isDeleteConfirmOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={closeDeleteConfirmModal}
          ></div>

          <div className="fixed inset-x-0 bottom-0 px-4 rounded-t-xl p-4 bg-white z-50">
            <div className="flex justify-end">
              <button onClick={closeDeleteConfirmModal}>
                <XIcon />
              </button>
            </div>

            <p className="text-center text-gray-100 font-semibold pt-[32px] pb-[51px]">
              댓글을 삭제하시겠습니까?
            </p>

            <div className="p-4">
              <button
                className="w-full bg-primary-500 text-white font-semibold rounded-lg py-3"
                onClick={() => handleDelete && handleDelete(id)}
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
