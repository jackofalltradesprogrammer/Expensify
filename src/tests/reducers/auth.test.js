import authReducer from '../../reducers/auth';

test('should set uid forlogin', () => {
  const action = {
    type: 'LOGIN',
    uid: '123'
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(action.uid);
});

test('should remove uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({});
});
