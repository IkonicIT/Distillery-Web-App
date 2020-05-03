import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-ofs-entitlement',
  templateUrl: './beer-ofs-entitlement.component.html',
  styleUrls: ['./beer-ofs-entitlement.component.css']
})
export class BeerOfsEntitlementComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/beer') && this.permServ.getPermission('home/beer/beer-ofs-entitlement'))) {
      this.router.navigateByUrl('home/beer');
    }
  }

}
