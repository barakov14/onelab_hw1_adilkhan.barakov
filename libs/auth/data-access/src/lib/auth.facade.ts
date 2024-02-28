import {Injectable, inject} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {authActions} from './+state/auth.actions'
import {pipe} from 'rxjs'
import {selectAuthStatus} from './+state/auth.selectors'

@Injectable({providedIn: 'root'})
export class AuthFacade {
  private readonly store = inject(Store)
  public selectAuthStatus = this.store.pipe(select(selectAuthStatus))
  login(email: string, password: string) {
    const req = {
      email: email,
      password: password,
      returnSecureToken: true,
    }
    this.store.dispatch(authActions.login({req}))
  }

  register(email: string, password: string) {
    const req = {
      email: email,
      password: password,
      returnSecureToken: true,
    }
    this.store.dispatch(authActions.register({req}))
  }

  logout() {
    this.store.dispatch(authActions.logout())
  }
}
