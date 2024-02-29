import {inject, Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {map, switchMap} from 'rxjs'
import {profileActions} from './profile.actions'
import {User} from '@onelab/core/api-types'
import {LocalStorageJwtService} from '../../../../../auth/data-access/src/lib/services/local-storage-jwt.service'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../../../../src/environments/environment.development'

@Injectable({providedIn: 'root'})
export class ProfileEffects {
  loadUserInformationEffect$ = createEffect(
    (
      api = inject(HttpClient),
      actions$ = inject(Actions),
      jwtService = inject(LocalStorageJwtService)
    ) =>
      actions$.pipe(
        ofType(profileActions.loadUserInformation),
        switchMap(() =>
          api
            .get<User>(
              `${environment.api_url}/users/${jwtService.getUuid()}.json`
            )
            .pipe(
              map((user) => {
                console.log(user)
                return profileActions.loadUserInformationSuccess({user})
              })
            )
        )
      ),
    {functional: true}
  )
}
