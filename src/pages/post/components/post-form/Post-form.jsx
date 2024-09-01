import { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Icon, Input } from "../../../../components";
import { savePostAsync } from "../../../../action";
import { SpecialPanel } from "../special-panel/Special-panel";
import { sanitazeContent } from "./utils";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router";
const PostFormContentContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();
  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanitazeContent(contentRef.current.innerHTML);

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: newImageUrl,
        title: newTitle,
        content: newContent,
      })
    ).then(() => navigate(`/post/${id}`));
  };
  return (
    <div className={className}>
      <Input
        ref={imageRef}
        defaultValue={imageUrl}
        placeholder="Изображение..."
      />
      <Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
      <SpecialPanel
        publishedAt={publishedAt}
        margin="20px 0"
        editButton={
          <Icon
            id="fa-floppy-o"
            margin="0 10px 0 0"
            size="21px"
            onClick={onSave}
          />
        }
      />
      <div
        ref={contentRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="post-text"
      >
        {content}
      </div>
    </div>
  );
};

export const PostForm = styled(PostFormContentContainer)`
  & img {
    float: left;
    margin: 0 20px 10px 0;
  }
  & .post-text {
    font-size: 18px;
    white-space: pre-line;
  }
`;
