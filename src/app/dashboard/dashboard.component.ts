import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

isSidebarOpen = true;
isFeesCollapsed = true;
isProgramCollapsed = true;
profileDropdownOpen: boolean = false;
user:any;
profileData: any=[];


constructor(private studentService:StudentService, private userService:UserService) { } 

ngOnInit() {

  this.getProfileData()

    
}
getProfileData(){
  this.userService.getUserInfo(this.user).subscribe(
    data=>{
      this.profileData=data;
      console.log(data)
      console.log(this.profileData)
    },
    error => {
      console.error('Failed to fetch user details');
    }
    );

}

toggleSidebar(){

  this.isSidebarOpen  = !this.isSidebarOpen;
}

toggleFeesCollapse() {
    this.isFeesCollapsed = !this.isFeesCollapsed;
  }
  
  
toggleProgramCollapse() {
    this.isProgramCollapsed = !this.isProgramCollapsed;
  }

  closeProfileDropdown() {
    this.profileDropdownOpen = false;
  }

}
