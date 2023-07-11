import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user: any; 
profileData :any =[]
No: any
isSidebarOpen = true;
isFeesCollapsed = true;
isProgramCollapsed = true;
profileDropdownOpen: boolean = false
  
  
  constructor(private userService: UserService, private studentService: StudentService) { }

  
  
  ngOnInit(): void {
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
