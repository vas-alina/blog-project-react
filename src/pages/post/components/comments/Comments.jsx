import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./components";
import { useServerRequest } from "../../../../hooks";
import { Icon } from "../../../../components";
import { selectUserId } from "../../../../selectors";
import { addCommentAsync } from "../../../../action";
import styled from "styled-components";
const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const userId = useSelector(selectUserId)
  const dispatch= useDispatch()
  const requestServer = useServerRequest()


  const onNewCommentAdd = (userId, postId, content) => {
    dispatch(addCommentAsync(requestServer, userId, postId, content));
  };
  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          name="comment"
          value={newComment}
          placeholder="Комментарий..."
          onChange={({ target }) => setNewComment(target.value)}
        ></textarea>
        <Icon
          id="fa-paper-plane-o"
          margin="0 0 0 10px"
          size="21px"
          onClick={() => onNewCommentAdd(userId, postId, newComment)}
        />
      </div>
      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment
            key={id}
            id={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  display: flex;
  margin: 20px auto;
  width: 580px;
  & .new-comment {
    display: flex;
    width: 100%;
    resize: none;
    margin: 20px 0 0;
  }

  & .new-comment textarea {
    width: 100%;
    resize: none;
    height: 120px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
