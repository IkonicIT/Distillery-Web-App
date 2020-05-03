import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentTransportOfsSavedTableComponent } from '../shipment-transport-ofs-saved-table/shipment-transport-ofs-saved-table.component';

@Component({
  selector: 'app-shipment-transport-ofs-save',
  templateUrl: './shipment-transport-ofs-save.component.html',
  styleUrls: ['./shipment-transport-ofs-save.component.css']
})
export class ShipmentTransportOfsSaveComponent implements OnInit {

  constructor(private challanDialog:MatDialog) { }

  ngOnInit() {
  }
    challan(){
      this.challanDialog.open(ShipmentTransportOfsSavedTableComponent);
    }
}
