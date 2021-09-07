import { TYPES } from '@/actions/UserActions';

export const userReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.REGISTER_SUCCESS:
      return { ...state, ...payload.user };
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

export const usersReducer = (state = [], { payload, type }) => {
  switch (type) {
    case TYPES.UPDATE_USERS:
      return { ...state, ...payload.users };
    default:
      return state;
  }
};
