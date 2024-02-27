import {Route} from '@angular/router'
import {AuthorizedUserLayoutComponent} from './authorized-user-layout/authorized-user-layout.component'
import {authGuard} from '../../libs/auth/data-access/src/lib/services/auth.guard'
import {HomeComponent} from '@onelab/home'

export const appRoutes: Route[] = [
  {
    path: '',
    component: AuthorizedUserLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@onelab/home').then((c) => c.HomeComponent),
      },
    ],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@onelab/auth/feature-auth').then((c) => c.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@onelab/auth/feature-auth').then((c) => c.LoginComponent),
  },
]
