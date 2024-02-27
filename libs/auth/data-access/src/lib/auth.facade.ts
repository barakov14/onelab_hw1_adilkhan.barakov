import {Injectable, inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {authActions} from './+state/auth.actions'

@Injectable({providedIn: 'root'})
export class AuthFacade {
  private readonly store = inject(Store)
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
