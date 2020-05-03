import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentTransportOfsComponent } from '../shipment-transport-ofs/shipment-transport-ofs.component';

@Component({
  selector: 'app-shipment-transport-permit-request',
  templateUrl: './shipment-transport-permit-request.component.html',
  styleUrls: ['./shipment-transport-permit-request.component.css']
})
export class ShipmentTransportPermitRequestComponent implements OnInit {

  constructor(private transport:MatDialog) { }

  ngOnInit() {
  }
  adding(){
    this.transport.open(ShipmentTransportOfsComponent);
  }
}
