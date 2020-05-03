import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentTransportOfsSaveComponent } from '../shipment-transport-ofs-save/shipment-transport-ofs-save.component';

@Component({
  selector: 'app-shipment-transport-ofs',
  templateUrl: './shipment-transport-ofs.component.html',
  styleUrls: ['./shipment-transport-ofs.component.css']
})
export class ShipmentTransportOfsComponent implements OnInit {

  constructor(private saveDialog:MatDialog) { }

  ngOnInit() {
  }
  save(){
    this.saveDialog.open(ShipmentTransportOfsSaveComponent);
  }
}
