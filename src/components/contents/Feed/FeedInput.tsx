import { ReactComponent as SendIcon } from '@assets/images/send-icon.svg';

import React, { useState } from 'react';

const FeedInput = ({
  addComment,
  addReply,
  isReplying,
  currentComment,
}: any) => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      if (isReplying && currentComment) {
        addReply(input, currentComment.id);
      } else {
        addComment(input);
      }
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (input.trim()) {
        if (isReplying && currentComment) {
          addReply(input, currentComment.id);
        } else {
          addComment(input);
        }
        setInput('');
      }
    }
  };

  return (
    <form
      className="fixed bottom-0 left-0 right-0 py-2 px-4 w-full border-t border-t-gray-40 bg-white"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row items-center">
        <div className="w-14">
          <img
            className="rounded-2xl"
            src="http://via.placeholder.com/40x40"
            alt="프로필 이미지"
          />
        </div>

        <div className="relative flex flex-row w-full">
          <input
            className="w-full py-[11px] text-base rounded-lg px-4 placeholder:text-gray-70 bg-gray-30"
            type="text"
            placeholder={isReplying ? '답글 달기' : '댓글 달기'}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
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
