// export const getLastPageFromLinks = (links) => {
//     const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/)
//     return Number(result[1])
// }

export const getLastPageFromLinks = (links) => {
    if (!links) {
        console.error("Links are null or undefined.");
        return 1; // Возвращаем 1 по умолчанию, если нет ссылки на последнюю страницу
    }

    const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);
    
    if (result && result[1]) {
        return Number(result[1]);
    }

    // Если не удалось найти ссылку на последнюю страницу
    console.error("Failed to extract last page from links.");
    return 1; // Возвращаем 1 по умолчанию
};