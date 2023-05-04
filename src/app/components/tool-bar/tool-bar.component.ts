import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FirebaseAuthModule } from '../../modules/firebase-auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent  implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) { }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.angularFireAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user;
    })
  }

  logout() {
    this.angularFireAuth.signOut();
    this.router.navigate(['/login']);
  }

  expandMenu() {
    
  }
}

