import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/apiServices/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleSideBar =  true;
  constructor(private userServ: UserService) { }

  ngOnInit() {
  }

  toggleClick(): void {
    this.toggleSideBar = !this.toggleSideBar;
    this.userServ.setToggleSideBar(this.toggleSideBar);
  }

}
