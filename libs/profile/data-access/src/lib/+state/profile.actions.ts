import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {User} from '@onelab/core/api-types'

export const profileActions = createActionGroup({
  source: 'Auth',
  events: {
    loadUserInformation: emptyProps(),
    loadUserInformationSuccess: props<{user: User}>(),
    loadUserInformationFailure: emptyProps(),
  },
})
