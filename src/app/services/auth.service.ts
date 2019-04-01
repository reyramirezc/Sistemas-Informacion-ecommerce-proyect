import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    this.user$ = this.afsAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  /*registerUser(email: string, pass: string) {
    return new Promise ((resolve, reject)=>{
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }

  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }*/

  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    return this.afsAuth.auth.signInWithPopup(provider).then( (data) => {
      console.log(data);
      this.afs.collection('/users').doc(data.user.uid).get().subscribe(docSnapshot => {
        if (docSnapshot.exists) {
          alert("Welcome" + data.user.displayName );
        }else{
          return this.updateUserData(data.user);
        }
      });

      // if ( this.afs.collection('/users').doc(data.user.uid) ){
      // }else{
      // }
    });
  }

  async signOut(){
    await this.afsAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user , isAdmin ? : boolean) {
    //Set user data to firestore on login

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "Sin Nombre",
      admin: isAdmin || false
    };

    return userRef.set(data, {merge: true});

  }

}
