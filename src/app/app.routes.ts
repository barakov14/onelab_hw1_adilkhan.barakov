import {Route} from '@angular/router'
import {AuthorizedUserLayoutComponent} from './authorized-user-layout/authorized-user-layout.component'
import {authGuard} from '../../libs/auth/data-access/src/lib/services/auth.guard'

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
      {
        path: 'profile',
        loadComponent: () =>
          import('@onelab/profile').then((c) => c.ProfileComponent),
      },
      {
        path: 'information',
        loadComponent: () =>
          import('@onelab/information').then((c) => c.InformationComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@onelab/settings').then((c) => c.SettingsComponent),
      },
    ],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@onelab/auth').then((c) => c.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@onelab/auth').then((c) => c.LoginComponent),
  },
]
