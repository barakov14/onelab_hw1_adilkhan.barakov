import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http'
import {catchError, Observable, throwError} from 'rxjs'
import {inject} from '@angular/core'
import {LocalStorageJwtService} from './local-storage-jwt.service'
import {Router} from '@angular/router'

export const tokenInterceptor = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const localStorageJwtService = inject(LocalStorageJwtService)
  const token: string | null = localStorageJwtService.getToken()
  const router = inject(Router)

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        router.navigate(['/login'])
        localStorageJwtService.removeItem()
      }
      return throwError(() => error)
    })
  )
}
