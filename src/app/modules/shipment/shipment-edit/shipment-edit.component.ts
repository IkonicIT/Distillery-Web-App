import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentEditPreviewComponent } from '../shipment-edit-preview/shipment-edit-preview.component';

@Component({
  selector: 'app-shipment-edit',
  templateUrl: './shipment-edit.component.html',
  styleUrls: ['./shipment-edit.component.css']
})
export class ShipmentEditComponent implements OnInit {

  constructor(private previewDialog:MatDialog) { }

  ngOnInit() {
  }
  preview(){
    this.previewDialog.open(ShipmentEditPreviewComponent);
  }



}
