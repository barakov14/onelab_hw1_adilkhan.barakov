import {inject, Injectable} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {profileActions} from './+state/profile.actions'
import {selectProfileStatus, selectUser} from './+state/profile.selectors'

@Injectable({providedIn: 'root'})
export class ProfileFacade {
  private readonly store = inject(Store)

  public selectProfileStatus = this.store.pipe(select(selectProfileStatus))
  public selectUser = this.store.pipe(select(selectUser))

  loadUser() {
    this.store.dispatch(profileActions.loadUserInformation())
  }
}
