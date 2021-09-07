export const getUser = (state) => {
  return Object.keys(state.user).length > 0 ? state.user : null;
};

export const getUsers = (state) => {
  return state.users || [];
};
