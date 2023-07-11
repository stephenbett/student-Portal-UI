import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  credentials = { 
    username: '',
    password: '',
    grant_type :'password'
  };

  loginFailed ! :boolean;
  loginSuccessful!: boolean;

constructor(private userService: UserService,private router: Router) { }

ngOnInit(): void {
  
  this.login()
}

login() {
  

  this.userService.login(this.credentials).subscribe(

    response => {
        localStorage.setItem("token",response.access_token)
        localStorage.setItem("email", response.Email)
        localStorage.setItem("username", response.UserName)
        localStorage.setItem("Name",response.Name)
        localStorage.setItem("CourseName",response.Course_Name)
        localStorage.setItem("Balance",response.Balance_LCY)
        localStorage.setItem("Address",response.Address)
        localStorage.setItem("Age",response.Age)
        localStorage.setItem("PhoneNumber",response.Phone_No)
        localStorage.setItem("Course",response.Course)
        localStorage.setItem("SchoolName",response.SchoolName)
        console.log(response)
      // Handle successful login response
      this.loginFailed = false;
      this.loginSuccessful = true;

      console.log('Login Sucessfull');
      this.router.navigate(['/dashboard']);
    },
    error => {
      // Handle error response
      this.loginFailed = true;
      this.loginSuccessful = false;
      console.error('Login Failed');
    }
  );
}
}