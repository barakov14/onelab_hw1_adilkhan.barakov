import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {appRoutes} from './app.routes'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {API_URL} from '@onelab/core/http'
import {environment} from '../environments/environment.development'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {
  AuthEffects,
  authFeature,
  tokenInterceptor,
} from '@onelab/auth/data-access'
import {provideEffects} from '@ngrx/effects'
import {provideStore} from '@ngrx/store'
import {ProfileEffects} from '../../libs/profile/data-access/src/lib/+state/profile.effects'
import {profileFeature} from '../../libs/profile/data-access/src/lib/+state/profile.reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideStore({
      [authFeature.name]: authFeature.reducer,
      [profileFeature.name]: profileFeature.reducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    provideEffects(AuthEffects, ProfileEffects),
  ],
}
