import {createFeature, createReducer, on} from '@ngrx/store'
import {authInitialState} from '../model/auth.model'
import {authActions} from './auth.actions'

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    authInitialState,
    on(authActions.login, (state) => ({
      ...state,
      authStatus: 'loading' as const,
    })),
    on(authActions.register, (state) => ({
      ...state,
      authStatus: 'loading' as const,
    })),

    on(authActions.logout, (state) => ({
      ...state,
      ...authInitialState,
    })),

    on(authActions.authSuccess, (state) => ({
      ...state,
      authStatus: 'loaded' as const,
    }))
  ),
})
