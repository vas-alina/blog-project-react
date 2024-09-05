import { transformPost } from "../transformers";

export const getPosts = (page, limit) =>
    fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
        .then((loadedPosts) =>
            Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]),
        )
        .then(([loadedPosts, links]) => ({
            posts: loadedPosts && loadedPosts.map(transformPost),
            links,
        }));
// import { transformPost } from "../transformers";

// export const getPosts = (page, limit) =>
//     fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
//         .then(async (response) => {
//             const loadedPosts = await response.json();
//             const links = response.headers.get('Link') || null; // Безопасно обрабатываем отсутствие заголовка
//             return [loadedPosts, links];
//         })
//         .then(([loadedPosts, links]) => ({
//             posts: loadedPosts && loadedPosts.map(transformPost), // Применяем трансформацию к постам
//             links, // Передаем заголовок для последующей обработки
//         }))
//         .catch((error) => {
//             console.error("Error fetching posts:", error);
//             return {
//                 posts: [],
//                 links: null,
//             }; // Возвращаем пустые значения в случае ошибки
//         });