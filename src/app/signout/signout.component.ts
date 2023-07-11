import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  router: any;


  constructor(private userService:UserService){}

  
  ngOnInit(): void {
    this.logout()
  }

  logout() {
    this.userService.logout().subscribe(
      () => {
        localStorage.removeItem('token')
        console.log('Logged out successfully');
        this.router.navigate(['/'])

        // Perform any additional logic or navigate to another page
      },
      error => {
        console.error('Failed to log out', error);
        // Handle error response
      }
    );
  }

}
