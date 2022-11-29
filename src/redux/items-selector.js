export const getPosts = (state) => state.posts.todoReducer;
export const getFilter = (state) => state.posts.filterReducer;

export const getVisibleContacts = (state) => {
  const filter = getFilter(state);
  const posts = getPosts(state);

  const normalizeFilter = filter.toLowerCase();

  return posts.filter((post) =>
    post.name.toLowerCase().includes(normalizeFilter)
  );
};
