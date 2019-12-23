import { createAction, props } from '@ngrx/store';

export const authLogin = createAction('[Login Component] AuthLogin', props<{ tokenObject }>());
export const authLogout = createAction('[Login Component] AuthLogout');
