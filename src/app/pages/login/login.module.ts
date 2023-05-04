import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { FirebaseAuthModule } from 'src/app/modules/firebase-auth/firebase-auth.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    // AngularFireAuthModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FirebaseAuthModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
