import { createReducer, on } from '@ngrx/store';
import { authLogin, authLogout } from './login.actions';

export const initialState = '';

const _loginReducer = createReducer(initialState,
  on(authLogin, (state, { tokenObject }) => {
   return tokenObject['token'];
  }),
  on(authLogout, state => {
    return '';
  }),
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}
