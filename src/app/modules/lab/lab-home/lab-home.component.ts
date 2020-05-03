import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-lab-home',
  templateUrl: './lab-home.component.html',
  styleUrls: ['./lab-home.component.css']
})
export class LabHomeComponent implements OnInit {
  hasLabPerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasLabPerm = this.permServ.getPermission('home/lab') ? true : false;
  }

}
