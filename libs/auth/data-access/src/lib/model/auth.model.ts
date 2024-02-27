import {LoadingStatus} from '@onelab/core/data-access'

export const authFeatureKey = 'auth'

export type AuthState = {
  authStatus: LoadingStatus
}

export const authInitialState: AuthState = {
  authStatus: 'init',
}
