import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {appRoutes} from './app.routes'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {provideHttpClient} from '@angular/common/http'
import {AuthEffects, authFeature} from '@onelab/auth/data-access'
import {provideEffects} from '@ngrx/effects'
import {provideStore} from '@ngrx/store'
import {ProfileEffects} from '../../libs/profile/data-access/src/lib/+state/profile.effects'
import {profileFeature} from '../../libs/profile/data-access/src/lib/+state/profile.reducer'
import {provideRouterStore} from '@ngrx/router-store'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(/*withInterceptors([tokenInterceptor])*/),
    provideStore({
      [authFeature.name]: authFeature.reducer,
      [profileFeature.name]: profileFeature.reducer,
    }),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideEffects(AuthEffects, ProfileEffects),
  ],
}
