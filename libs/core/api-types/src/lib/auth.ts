export interface RegisterRequest {
  email: string
  password: string
  returnSecureToken: boolean
}
export interface LoginRequest {
  email: string
  password: string
  returnSecureToken: boolean
}

export interface RegisterResponse {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

export interface LoginResponse {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered: boolean
}
