import {createFeature, createReducer, on} from '@ngrx/store'
import {profileActions} from './profile.actions'
import {profileInitialState} from '../model/profile.model'

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
      prfoileStatus: 'loaded' as const,
      user: action.user,
    }))
  ),
})
