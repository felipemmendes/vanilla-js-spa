export const getPostData = async (id) => {
  const data = fetch(
    `https://jsonplaceholder.typicode.com/posts${id ? '/' + id : '?_limit=5'}`
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.log(err));

  return data;
};
