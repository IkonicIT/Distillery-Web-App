import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentRouteAddedComponent } from '../shipment-route-added/shipment-route-added.component';

@Component({
  selector: 'app-shipment-route',
  templateUrl: './shipment-route.component.html',
  styleUrls: ['./shipment-route.component.css']
})
export class ShipmentRouteComponent implements OnInit {

  constructor(private routeAdded:MatDialog) { }

  ngOnInit() {
  }
  save(){
    this.routeAdded.open(ShipmentRouteAddedComponent);
  }
}
