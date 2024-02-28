import {createFeature, createReducer, on} from '@ngrx/store'
import {profileActions} from './profile.actions'
import {profileInitialState} from '../model/profile.model'
import {routerNavigationAction} from '@ngrx/router-store'

export const profileFeature = createFeature({
  name: 'profile',
  reducer: createReducer(
    profileInitialState,
    on(profileActions.loadUserInformation, (state) => ({
      ...state,
      profileStatus: 'loading' as const,
    })),
    on(profileActions.loadUserInformationSuccess, (state, action) => ({
      ...state,
      profileStatus: 'loaded' as const,
      user: action.user,
    })),
    on(routerNavigationAction, (state) => ({
      ...state,
      user: null,
    }))
  ),
})
