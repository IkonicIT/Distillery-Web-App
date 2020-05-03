import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShipmentEditPreviewSaveComponent } from '../shipment-edit-preview-save/shipment-edit-preview-save.component';

@Component({
  selector: 'app-shipment-edit-preview',
  templateUrl: './shipment-edit-preview.component.html',
  styleUrls: ['./shipment-edit-preview.component.css']
})
export class ShipmentEditPreviewComponent implements OnInit {

  constructor(private saveDialog:MatDialog) { }

  ngOnInit() {
  }
save(){
    this.saveDialog.open(ShipmentEditPreviewSaveComponent);
}


}
