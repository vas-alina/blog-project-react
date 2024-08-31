import { addComment, getComments, getPost } from "../api";
import { ROLE } from "../constans/role";
import { sessions } from "../sessions";

export const addPostComment = async (hash, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
  console.log("до проверки");
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }
  console.log("после");
  await addComment(userId, postId, content);

  // await getPost(postId);

  const post = await getPost(postId);
  const comments = await getComments(postId);
  return {
    error: null,

    res: {
      ...post,
      comments,
    },
  };
};
