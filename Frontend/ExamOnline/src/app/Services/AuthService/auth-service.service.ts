import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  get isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false
  }
}
