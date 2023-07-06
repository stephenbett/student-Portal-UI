import { Component, OnInit } from '@angular/core';

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




constructor() { } 

ngOnInit(): void {
  
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
