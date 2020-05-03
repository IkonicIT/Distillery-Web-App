import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-sales',
  templateUrl: './bar-sales.component.html',
  styleUrls: ['./bar-sales.component.css']
})
export class BarSalesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-sales') && this.permServ.getPermission('home/licensee-sales/bar-sales'))) {
      this.router.navigateByUrl('home/licensee-sales');
    }
  }

}
