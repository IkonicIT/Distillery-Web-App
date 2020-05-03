import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-depot',
  templateUrl: './shipment-depot.component.html',
  styleUrls: ['./shipment-depot.component.css']
})
export class ShipmentDepotComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/shipment') && this.permServ.getPermission('home/shipment/shipment-depot'))) {
      this.router.navigateByUrl('home/shipment');
    }
  }

}
