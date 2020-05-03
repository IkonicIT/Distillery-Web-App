import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-td2-sales',
  templateUrl: './td2-sales.component.html',
  styleUrls: ['./td2-sales.component.css']
})
export class Td2SalesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-sales') && this.permServ.getPermission('home/licensee-sales/td2-sales'))) {
      this.router.navigateByUrl('home/licensee-sales');
    }
  }

}
