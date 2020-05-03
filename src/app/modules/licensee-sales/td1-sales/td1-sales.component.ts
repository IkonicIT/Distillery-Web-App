import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-td1-sales',
  templateUrl: './td1-sales.component.html',
  styleUrls: ['./td1-sales.component.css']
})
export class Td1SalesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-sales') && this.permServ.getPermission('home/licensee-sales/td1-sales'))) {
      this.router.navigateByUrl('home/licensee-sales');
    }
  }

}
