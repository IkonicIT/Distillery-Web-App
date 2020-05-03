import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depots-retailer-returns',
  templateUrl: './depots-retailer-returns.component.html',
  styleUrls: ['./depots-retailer-returns.component.css']
})
export class DepotsRetailerReturnsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/depots') && this.permServ.getPermission('home/depots/depots-retailer-returns'))) {
      this.router.navigateByUrl('home/depots');
    }
  }

}
