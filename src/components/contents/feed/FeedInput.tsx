import { addCommentReply, addFeedComment, editComment } from '@lib/api/feed';
import { getUser } from '@lib/api/user';

import { ReactComponent as SendIcon } from '@assets/images/feed/send-icon.svg';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { IFeedInput } from '../../../types/feedType';
import React, { useEffect, useRef, useState } from 'react';

const FeedInput = ({
  feedId,
  reply,
  edit,
  commentState,
  onCancelReply,
  onEditComplete,
}: IFeedInput) => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // input 유저 사진용
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  // 댓글 추가
  const addCommentMutation = useMutation({
    mutationFn: (content: string) => addFeedComment(feedId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', feedId] });
      setInput('');
    },
  });

  // 대댓글 추가
  const addReplyMutation = useMutation({
    mutationFn: (content: string) =>
      addCommentReply(commentState?.id as string, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', feedId] });
      setInput('');
      onCancelReply();
    },
  });

  // 댓글 수정
  const editCommentMutation = useMutation({
    mutationFn: (content: string) =>
      editComment(commentState?.id as string, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', feedId] });
      setInput('');
      onEditComplete();
    },
  });

  // commentState, 수정 클릭했을 떄 input focus
  useEffect(() => {
    if (edit && commentState) {
      setInput(commentState.content);
      inputRef.current?.focus();
    } else if (reply) {
      setInput('');
      inputRef.current?.focus();
    } else {
      setInput('');
    }
  }, [edit, reply, commentState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      if (edit && commentState) {
        // 수정시 댓글 또는 대댓글 수정
        editCommentMutation.mutate(input);
      } else if (reply && commentState) {
        // 답글 클릭했을 때 대댓글 추가
        addReplyMutation.mutate(input);
      } else {
        //  댓글 추가
        addCommentMutation.mutate(input);
      }
    }
  };

  return (
    <form
      className="fixed bottom-0 left-[50%] translate-x-[-50%] py-2 px-4 w-full border-t border-gray-40 bg-white desktop:w-[372px] dark:bg-black dark:border-t-[#2A2A2A]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row items-center">
        <div className="w-12 h-10 ">
          <img
            className="rounded-full border-[0.5px] border-solid border-[#ddd] dark:border-[#444] w-10 h-10"
            src={user?.data.profile?.thumbnail}
            alt="프로필 이미지"
          />
        </div>

        <div className="relative flex flex-row w-full">
          <input
            ref={inputRef}
            className="ml-2 w-full py-[11px] text-base rounded-lg px-2 placeholder:text-gray-70 bg-gray-30 dark:bg-[#2A2A2A]  dark:placeholder:text-gray-60 dark:text-gray-30"
            type="text"
            placeholder={'댓글달기'}
            value={input}
            onChange={handleInputChange}
          />

          {input && (
            <button
              type="submit"
              className="flex items-center justify-center rounded-lg w-10 h-10 absolute right-1 top-1/2 transform -translate-y-1/2"
            >
              <SendIcon />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default FeedInput;
