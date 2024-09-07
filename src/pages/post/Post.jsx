import { useEffect, useLayoutEffect, useState } from "react";
import { useMatch, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Comments, PostContent, PostForm } from "./components";
import { Error, PrivateContent } from "../../components";
import { useServerRequest } from "../../hooks";
import { selectPost } from "../../selectors";
import { RESET_POST_DATA, loadPostAsync } from "../../action";
import styled from "styled-components";
import { ROLE } from "../../constans";

const PostContainer = ({ className }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const isCreating = !!useMatch("/post");
  const isEditing = !!useMatch("/post/:id/edit");
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
      setError(postData.error);
      setIsLoading(false);
    });
  }, [dispatch, requestServer, params.id, isCreating]);

  if (isLoading) {
    return null;
  }

  const SpecificPostPage =
    isCreating || isEditing ? (
      <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
        <div className={className}>
          <PostForm post={post} />
        </div>
      </PrivateContent>
    ) : (
      <div className={className}>
        <PostContent post={post} />
        <Comments comments={post.comments} postId={post.id} />
      </div>
    );
  return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
  margin: 40px 0;
  padding: 0px 80px;
`;
