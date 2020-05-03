import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-distillery-home',
  templateUrl: './distillery-home.component.html',
  styleUrls: ['./distillery-home.component.css']
})
export class DistilleryHomeComponent implements OnInit {
  hasDistilleryPerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasDistilleryPerm = this.permServ.getPermission('home/distillery') ? true : false;
  }

}
