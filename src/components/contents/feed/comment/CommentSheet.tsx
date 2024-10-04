import { ICommentSheet } from '../../../../types/feedType';
import CommentAndReply from './CommentAndReply';

const CommentSheet = ({ comments, feedId, onReply }: ICommentSheet) => {
  return (
    <div className="flex flex-col pb-[100px] gap-4">
      <span className="text-gray-100 font-semibold">댓글</span>

      {comments?.map((comment) => (
        <div key={comment.id}>
          <CommentAndReply
            comment={comment}
            feedId={feedId}
            onReply={onReply}
          />
          {comment.replies &&
            comment.replies.map((reply) => (
              <CommentAndReply
                key={reply.id}
                comment={reply}
                feedId={feedId}
                isReply={true}
                onReply={onReply}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default CommentSheet;
