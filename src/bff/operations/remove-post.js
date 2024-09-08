import { deleteComment, deletePost, getComments } from "../api";
import { ROLE } from "../constans/role";
import { sessions } from "../sessions";

export const removePost = async (hash, id) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: "Доступ запрещен",
            res: null,
        };
    }

    await deletePost(id);
    const comments = await getComments(id);
    await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

    await deleteComment(id);

    return {
        error: null,

        res: true,
    };
};
