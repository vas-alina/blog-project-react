import styled from "styled-components";
import { Icon } from "../../../../../components";

const CommentContainer = () => {
  return (
    <div className={(className, id, author, content, publishedAt)}>
      <div className="information-panel">
        <div className="author">
          <Icon
            id="fa-user-circle-o"
            margin="0 0 0 10px"
            size="21px"
            onClick={() => {}}
          />
          {author}
        </div>
        <div className="published-at">
          <Icon
            id="fa-calendar-o"
            margin="0 0 0 10px"
            size="21px"
            onClick={() => {}}
          />
          {publishedAt}
        </div>

        {}
      </div>
      <div className="comment-text">{content}</div>
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  & .information-panel {
    display: flex;
    justify-content: space-between;
  }
  & .author {
    display: flex;
  }
  & .published-at {
    display: flex;
  }
`;
