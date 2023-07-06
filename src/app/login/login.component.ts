import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { 
    username: '',
    password: '',
    grant_type :'password'
  };

constructor(private userService: UserService,private router: Router) { }


login() {
  

  this.userService.login(this.credentials).subscribe(

    response => {
      // Handle successful login response
      console.log('Login Sucessfull');
      this.router.navigate(['/dashboard']);
    },
    error => {
      // Handle error response
      console.error('Login Failed');
    }
  );
}
}