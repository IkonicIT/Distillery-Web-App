import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distillery-indent',
  templateUrl: './distillery-indent.component.html',
  styleUrls: ['./distillery-indent.component.css']
})
export class DistilleryIndentComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/distillery-indent'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}
