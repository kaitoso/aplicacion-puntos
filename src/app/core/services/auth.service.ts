import { Injectable, inject } from '@angular/core';
import {
  Auth,
  AuthProvider,
  GoogleAuthProvider,
  authState,
  signInWithPopup,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  readonly authState$ = authState(this.auth);

  constructor() {}

  signUpWithGoogle() {
    const provider = new GoogleAuthProvider();
    return this.callPopUp(provider);
  }

  async callPopUp(provider: AuthProvider): Promise<any> {
    try {
      const result = await signInWithPopup(this.auth, provider);
      return result;
    } catch (error) {
      return error;
    }
  }
}
