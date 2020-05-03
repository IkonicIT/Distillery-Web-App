import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HologramScanCodeComponent } from '../hologram-scan-code/hologram-scan-code.component';

@Component({
  selector: 'app-hologram-indent-purchase-status-forwarded-form',
  template:`
  <h1 mat-dialog-header style="font-size: 1.5rem;
  text-align: center;
  background-color: #2e5d74;
  color: white;
  height: 2.2rem;">Scan carton/Indent Barcode</h1>
  <div style="font-weight:500">
  <div mat-dialog-content class="type" >
  <label for="">Number of cartons to scan
      <select name="ENA" id="" style="padding-right:78px">
          <option value="">ENA</option>
      </select>
  </label>
</div>
<div class="refNo" style="margin-left:6rem">
  <label for="">
      scan
      <input type="text" style="height: 24px;    border-radius: 2.5px;">
  </label>
</div>
<div class="date" >
  <label for="">scan index barcode
      <input type="button" (click)="scan()" value="click" style="height: 24px;padding-right:17px" >
  </label>
  </div>
  `,
  styleUrls: []
})
export class HologramIndentPurchaseStatusForwardedFormComponent implements OnInit {

  constructor(private scanDialog:MatDialog) { }

  ngOnInit() {
  }
scan(){
    this.scanDialog.open(HologramScanCodeComponent);
}
}
