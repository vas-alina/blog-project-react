import { getComments, getPosts } from "../api";
import { getCommensCount } from "../utils";

export const fetchPosts = async () => {


    const [posts, comments] = await Promise.all([getPosts(), getComments()])

    return {
        error: null,
        res: posts.map((post) => ({
            ...post,
            commentsCount: getCommensCount(comments, post.id)
        })),
    };
};
