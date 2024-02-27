import {AuthState} from '../model/auth.model'

export const selectFeature = (state: {auth: AuthState}) => state.auth
