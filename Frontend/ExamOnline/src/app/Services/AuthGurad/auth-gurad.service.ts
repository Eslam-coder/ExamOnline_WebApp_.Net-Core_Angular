import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradService {

  constructor() { }

  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
