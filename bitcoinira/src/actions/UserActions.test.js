import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { register, logout, TYPES } from '@/actions/UserActions';

const user = {
  firstName: 'Mobile Engineer',
  lastName: 'bitcoin IRA',
  email: 'engineer@bitcoinira.com',
  city: 'Los Angeles',
  country: 'USA',
  dateOfBirth: '01/01/2000',
  mobile: '800-245-8789',
};

const registerActions = [
  {
    type: TYPES.REGISTER_REQUEST,
    payload: null,
  },
  {
    type: TYPES.REGISTER_ERROR,
    payload: {
      error: 'Connection error',
    },
  },
];

const logoutActions = [
  {
    type: TYPES.CLEAR_STORE,
    payload: null,
  },
];

describe('UserActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('should create an action for register', async () => {
    await store.dispatch(register(user));
    const actions = store.getActions();
    expect(actions).toEqual(registerActions);
  });

  it('should create an action for logout', async () => {
    await store.dispatch(logout());
    const actions = store.getActions();
    expect(actions).toEqual(logoutActions);
  });
});
