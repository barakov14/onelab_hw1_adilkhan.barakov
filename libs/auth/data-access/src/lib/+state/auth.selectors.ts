import {AuthState} from '../model/auth.model'
import {createSelector} from '@ngrx/store'

export const selectFeature = (state: {auth: AuthState}) => state.auth

export const selectAuthStatus = createSelector(
  selectFeature,
  (state: AuthState) => state.authStatus
)
