import CommentAndReply from './CommentAndReply';

interface CommentSheetProps {
  comments: any[];
  handleReply: (comment: any) => void;
  handleDelete: (commentId: number) => void;
}

const CommentSheet = ({
  comments,
  handleReply,
  handleDelete,
}: CommentSheetProps) => {
  return (
    <div className="flex flex-col pb-[100px] gap-4">
      <span className="text-gray-100 font-semibold">댓글</span>

      {comments.map((comment: any) => (
        <div key={comment.id}>
          <CommentAndReply
            id={comment.id}
            userName={comment.userName}
            time={comment.time}
            content={comment.content}
            isReply={false}
            handleReply={() => handleReply(comment)}
            handleDelete={() => handleDelete(comment.id)}
          />
          {comment.replies &&
            comment.replies.map((reply: any) => (
              <CommentAndReply
                key={reply.id}
                id={reply.id}
                userName={reply.userName}
                time={reply.time}
                content={reply.content}
                isReply={true}
                handleDelete={() => handleDelete(reply.id)}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default CommentSheet;
