export const generateDate = () =>
  new Date(Math.random() * 1000000000000 + 1999999999999)
    .toString()
    .substring(0, 16)
    .replace("T", " ");
