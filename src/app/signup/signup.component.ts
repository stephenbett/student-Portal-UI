import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  successMessage ="Registered Successfully"

  constructor(private userService: UserService, private router: Router) { }
  user = {
    StudentNo:'',
    Email: '', 
    Password: '',
    ConfirmPassword:'',
       };

  confirmPassword!: string ;
  passwordMismatch!: boolean;

  checkPasswordMatch() {
    this.passwordMismatch = this.user.Password !== this.confirmPassword;
  }

  register() {
    this.userService.register(this.user).subscribe(
      response => {
        // Handle successful registration response
        console.log('Registered Successfull');
        this.router.navigate(['/login']);
      },
      error => {
        // Handle error response
        console.error('Failed to Register');
      }
    );
  }

}
