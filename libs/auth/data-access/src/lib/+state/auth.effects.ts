import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {authActions} from './auth.actions'
import {environment} from 'src/environments/environment.development'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {RegisterResponse, LoginResponse} from '@onelab/core/api-types'
import {LocalStorageJwtService} from '../services/local-storage-jwt.service'
import {Router} from '@angular/router'
@Injectable({providedIn: 'root'})
export class AuthEffects {
  registerEffect$ = createEffect(
    (actions$ = inject(Actions), http = inject(HttpClient)) =>
      actions$.pipe(
        ofType(authActions.register),
        switchMap(({req}) => {
          return http
            .post<RegisterResponse>(
              `${environment.auth_api_url}signUp?key=${environment.project_api_key}`,
              req
            )
            .pipe(
              map((res) => {
                console.log('register success')
                const token = {token: res.idToken}
                return authActions.authSuccess(token)
              }),
              catchError((err) => {
                console.log(err)
                return of(authActions.loginFailure())
              })
            )
        })
      ),
    {functional: true}
  )
  loginEffect$ = createEffect(
    (actions$ = inject(Actions), http = inject(HttpClient)) =>
      actions$.pipe(
        ofType(authActions.login),
        switchMap(({req}) => {
          return http
            .post<LoginResponse>(
              `${environment.auth_api_url}signInWithPassword?key=${environment.project_api_key}`,
              req
            )
            .pipe(
              map((res) => {
                console.log('login successful')
                const token = {token: res.idToken}
                return authActions.authSuccess(token)
              }),
              catchError((err) => {
                console.log(err)
                return of(authActions.loginFailure())
              })
            )
        })
      ),
    {functional: true}
  )

  authSuccessEffect$ = createEffect(
    (
      localStorageJWTService = inject(LocalStorageJwtService),
      router = inject(Router),
      actions$ = inject(Actions)
    ) => {
      return actions$.pipe(
        ofType(authActions.authSuccess),
        tap((action) => {
          localStorageJWTService.setItem(action.token)
          router.navigateByUrl('/home')
        })
      )
    },
    {functional: true, dispatch: false}
  )

  logoutEffect$ = createEffect(
    (
      actions$ = inject(Actions),
      jwtService = inject(LocalStorageJwtService),
      router = inject(Router)
    ) =>
      actions$.pipe(
        ofType(authActions.logout),
        tap(() => {
          jwtService.removeItem()
          router.navigate(['/login'])
        })
      ),
    {functional: true, dispatch: false}
  )
}
