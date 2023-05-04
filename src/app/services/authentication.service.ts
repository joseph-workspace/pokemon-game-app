import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth //Inject firebase auth service
  ) { }

  // logout() {
  //   return this.afAuth.signOut().then(() => {
  //     window.alert('Logged out!');
  //   })
  // }
}
