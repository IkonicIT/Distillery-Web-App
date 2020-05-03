import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentChallanSavedComponent } from '../shipment-challan-saved/shipment-challan-saved.component';

@Component({
  selector: 'app-shipment-transport-ofs-saved-table',
  templateUrl: './shipment-transport-ofs-saved-table.component.html',
  styleUrls: ['./shipment-transport-ofs-saved-table.component.css']
})
export class ShipmentTransportOfsSavedTableComponent implements OnInit {

  constructor( private savedDialog:MatDialog) { }

  ngOnInit() {
  }
saved(){
  this.savedDialog.open(ShipmentChallanSavedComponent);
}

}
