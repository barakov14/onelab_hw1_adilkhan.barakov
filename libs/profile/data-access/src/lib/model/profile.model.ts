import {LoadingStatus} from '@onelab/core/data-access'
import {User} from '@onelab/core/api-types'

export const profileFeatureKey = 'profile'

export type ProfileState = {
  profileStatus: LoadingStatus
  user: User | undefined | null
}

export const profileInitialState: ProfileState = {
  profileStatus: 'init',
  user: null,
}
