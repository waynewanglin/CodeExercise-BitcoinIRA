import { UserController } from '@/controllers';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  REGISTER: 'REGISTER',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_ERROR: 'REGISTER_ERROR',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  UPDATE_USERS: 'UPDATE_USERS',
  CLEAR_USERS: 'CLEAR_USERS',
};

const registerRequest = () => ({
  type: TYPES.REGISTER_REQUEST,
  payload: null,
});

const registerSuccess = (user) => ({
  type: TYPES.REGISTER_SUCCESS,
  payload: { user },
});

const updateUsers = (users) => ({
  type: TYPES.UPDATE_USERS,
  payload: { users },
});

const registerError = (error) => ({
  type: TYPES.REGISTER_ERROR,
  payload: { error },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const user = await UserController.register(userData);
    const users = await UserController.fetchUserList();
    dispatch(registerSuccess(user));
    dispatch(updateUsers(users));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await UserController.logout();
  } finally {
    dispatch(clearStore());
  }
};
