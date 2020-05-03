import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-distillery',
  templateUrl: './shipment-distillery.component.html',
  styleUrls: ['./shipment-distillery.component.css']
})
export class ShipmentDistilleryComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/shipment') && this.permServ.getPermission('home/shipment/shipment-distillery'))) {
      this.router.navigateByUrl('home/shipment');
    }
  }

}
