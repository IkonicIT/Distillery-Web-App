import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-revalidation',
  templateUrl: './shipment-revalidation.component.html',
  styleUrls: ['./shipment-revalidation.component.css']
})
export class ShipmentRevalidationComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/shipment') && this.permServ.getPermission('home/shipment/shipment-revalidation'))) {
      this.router.navigateByUrl('home/shipment');
    }
  }

}
