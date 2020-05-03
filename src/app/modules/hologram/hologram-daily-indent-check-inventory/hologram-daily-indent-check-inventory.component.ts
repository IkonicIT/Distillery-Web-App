import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HologramDailyIndentCheckInventoryAllocationComponent } from '../hologram-daily-indent-check-inventory-allocation/hologram-daily-indent-check-inventory-allocation.component';

@Component({
  selector: 'app-hologram-daily-indent-check-inventory',
  template:`
  <h1 mat-dialog-header style="font-size: 1.5rem;
  text-align: center;
  background-color: #2e5d74;
  color: white;
  height: 2.2rem;" >Excise Lab Information</h1>
  <p style="font-weight:400;">No of Spools scanned</p>
  <label style="font-weight:400">Scan
  <input type="text">
  <div><button style="background:#2e5d74;border-radius:1px" (click)="allocate()" >Allocate</button>
  `,
  styleUrls: []
})
export class HologramDailyIndentCheckInventoryComponent implements OnInit {

  constructor(private allocateDialog:MatDialog) { }

  ngOnInit() {
  }
allocate(){
    
    this.allocateDialog.open(HologramDailyIndentCheckInventoryAllocationComponent);

}

}
