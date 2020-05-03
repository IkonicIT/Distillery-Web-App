import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  hasUserPerm = false;
  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    this.hasUserPerm = this.permServ.getPermission('home/user') ? true : false;
  }

}
