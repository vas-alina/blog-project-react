import { updatePost } from "../api";
import { ROLE } from "../constans/role";
import { sessions } from "../sessions";

export const savePost = async (hash, newPostData) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);
    if (!access) {
        return {
            error: "Доступ запрещен",
            res: null,
        };
    }

    const updateResultPost = await updatePost(newPostData);

    return {
        error: null,
        res: updateResultPost,
    };
};
