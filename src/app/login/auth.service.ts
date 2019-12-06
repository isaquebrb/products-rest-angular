import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false;
  
  showMenu = new EventEmitter<boolean>();

  constructor(private router:Router) { }
  
  login(user: User){

    if(user.email == 'sample@email.com' && user.password == '123456'){
      this.userAuthenticated = true;
      this.showMenu.emit(true);
      this.router.navigate(['/home']);
    }else{
      this.userAuthenticated = false;
      this.showMenu.emit(false);
    }
  }
}
