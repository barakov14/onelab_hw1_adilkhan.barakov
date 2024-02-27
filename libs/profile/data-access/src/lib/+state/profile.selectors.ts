import {ProfileState} from '../model/profile.model'
import {createSelector} from '@ngrx/store'

export const selectFeature = (state: {profile: ProfileState}) => state.profile

export const selectUser = createSelector(
  selectFeature,
  (state: ProfileState) => state.user
)

export const selectProfileStatus = createSelector(
  selectFeature,
  (state: ProfileState) => state.profileStatus
)
