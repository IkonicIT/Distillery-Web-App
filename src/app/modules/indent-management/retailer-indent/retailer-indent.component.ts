import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-indent',
  templateUrl: './retailer-indent.component.html',
  styleUrls: ['./retailer-indent.component.css']
})
export class RetailerIndentComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/retailer-indent'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}
