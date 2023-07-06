import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any; 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo(this.user ).subscribe(

      response => {
        //console.log(response)
        // Assign the user details to the component variable
        this.user = response;
        // localStorage.setItem('email', response.email,)
        console.log(response)
        console.log(this.user)
      },
      error => {
        console.error('Failed to fetch user details');
      }
    );
  }

}
