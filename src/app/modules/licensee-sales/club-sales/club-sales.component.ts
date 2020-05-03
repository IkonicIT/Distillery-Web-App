import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-sales',
  templateUrl: './club-sales.component.html',
  styleUrls: ['./club-sales.component.css']
})
export class ClubSalesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-sales') && this.permServ.getPermission('home/licensee-sales/club-sales'))) {
      this.router.navigateByUrl('home/licensee-sales');
    }
  }

}
