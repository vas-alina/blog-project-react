import { getComments, getPosts } from "../api";
import { getCommentsCount } from "../utils";

export const fetchPosts = async (page, limit) => {
    const [{ posts, links }, comments] = await Promise.all([
        getPosts(page, limit),
        getComments()])
    console.log(links)
    return {
        error: null,
        res: {
            posts: posts.map((post) => ({
                ...post,
                commentsCount: getCommentsCount(comments, post.id),
            })),
            links,
        },
    };
};
// import { getComments, getPosts } from "/src/bff/api";
// import { getCommentsCount } from "/src/bff/utils"; // исправлено имя функции

// export const fetchPosts = async (page, limit) => {
//     try {
//         // Запрос данных параллельно
//         const [{ posts, links }, comments] = await Promise.all([
//             getPosts(page, limit),
//             getComments()

//         ]);
//         console.log(links)
//         // Возвращаем посты с добавленным количеством комментариев
//         return {
//             error: null,
//             res: {
//                 posts: posts.map((post) => ({
//                     ...post,
//                     commentsCount: getCommentsCount(comments, post.id), // исправлено имя функции
//                 })),
//                 links,
//             },
//         };
//     } catch (error) {
//         // Обрабатываем ошибку, если один из запросов не удался
//         return {
//             error: error.message || "Произошла ошибка",
//             res: null,
//         };
//     }
// };
