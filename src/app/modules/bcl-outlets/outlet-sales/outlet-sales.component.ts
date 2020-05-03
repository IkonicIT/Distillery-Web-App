import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet-sales',
  templateUrl: './outlet-sales.component.html',
  styleUrls: ['./outlet-sales.component.css']
})
export class OutletSalesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/bcl-outlets') && this.permServ.getPermission('home/bcl-outlets/outlet-sales'))) {
      this.router.navigateByUrl('home/bcl-outlets');
    }
  }

}
