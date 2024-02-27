import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {LoginRequest, RegisterRequest, User} from '@onelab/core/api-types'

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<{req: LoginRequest}>(),
    register: props<{req: RegisterRequest}>(),

    logout: emptyProps(),

    authSuccess: props<{token: string}>(),

    loginFailure: emptyProps(),
    registerFailure: emptyProps(),
  },
})
