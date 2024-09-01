import { useEffect, useLayoutEffect } from "react";
import { useMatch, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Comments, PostContent, PostForm } from "./components";
import { useServerRequest } from "../../hooks";
import { selectPost } from "../../selectors";
import { RESET_POST_DATA, loadPostAsync } from "../../action";
import styled from "styled-components";

const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();

  const isEditing = useMatch("/post/:id/edit");
  const isCreating = useMatch("/post");

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  const post = useSelector(selectPost);
  
  useEffect(() => {
    if (isCreating) {
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id));
  }, [dispatch, requestServer, params.id, isCreating]);

  return (
    <div className={className}>
      {isCreating || isEditing ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </div>
  );
};

export const Post = styled(PostContainer)`
  margin: 40px 0;
  padding: 0px 80px;
`;
