import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  successMessage = "";

  constructor(private userService: UserService, private router: Router) { }

  user = {
    StudentNo: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  };

  confirmPassword = '';
  passwordMismatch = false;

  checkPasswordMatch() {
    this.passwordMismatch = this.user.Password !== this.confirmPassword;
  }

  register() {
    if (!this.validateForm()) {
      return;
    }

    this.userService.register(this.user).subscribe(
      response => {
        // Handle successful registration response
        console.log('Registered successfully');
        this.successMessage = "Registration successful!";
        this.router.navigate(['/login']);
      },
      error => {
        // Handle error response
        console.error('Failed to register');
        this.successMessage = "Registration failed!";
      }
    );
  }

  validateForm(): boolean {
    // Perform form validation logic here
    // Check if all required fields are filled
    if (!this.user.StudentNo || !this.user.Email || !this.user.Password || !this.user.ConfirmPassword) {
      this.successMessage = "Please fill in all the required fields.";
      return false;
    }

    // Check if the email is valid
    if (!this.validateEmail(this.user.Email)) {
      this.successMessage = "Please enter a valid email address.";
      return false;
    }

    // Check if password and confirm password match
    if (this.user.Password !== this.user.ConfirmPassword) {
      this.successMessage = "Passwords do not match.";
      return false;
    }

    return true;
  }

  validateEmail(email: string): boolean {
    // Email validation logic (you can use a regular expression or any other validation method)
    // Return true if email is valid, false otherwise
    return true;
  }

}
