import {inject, Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {ApiService} from '@onelab/core/http'
import {map, switchMap} from 'rxjs'
import {profileActions} from './profile.actions'
import {User} from '@onelab/core/api-types'
import {LocalStorageJwtService} from '../../../../../auth/data-access/src/lib/services/local-storage-jwt.service'

@Injectable({providedIn: 'root'})
export class ProfileEffects {
  loadUserInformationEffect$ = createEffect(
    (
      api = inject(ApiService),
      actions$ = inject(Actions),
      localStorageJwtService = inject(LocalStorageJwtService)
    ) =>
      actions$.pipe(
        ofType(profileActions.loadUserInformation),
        switchMap(() =>
          api.get<User>(`/users/${localStorageJwtService.getUuid()}`).pipe(
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
