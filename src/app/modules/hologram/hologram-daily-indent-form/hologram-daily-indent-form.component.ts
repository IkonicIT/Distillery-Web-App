import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HologramDailyIndentFormSavedComponent } from '../hologram-daily-indent-form-saved/hologram-daily-indent-form-saved.component';

@Component({
  selector: 'app-hologram-daily-indent-form',
  template: `
  <h1 mat-dialog-header style=" font-size: 1.5rem;
  text-align: center;
  background-color: #2e5d74;
  color: white;
  height: 2.2rem;" >HEAL Daily Indent</h1>
  <div style="font-weight:500">
  <label>Quantity
  <input type="text">
  </label>
  </div>
  <div style="font-weight:500">
  <label>
  Purpose
  <select>
  <option>Select</option>
  </select>
  </label>
  </div>
  <div>
  <button style="margin-right: 56px;
  height: 28px;
  background: #2e5d74;" (click)="saveDailyIndent()">Save</button>
  <button style="height: 28px;
  background: #2e5d74;" mat-dialog-close>Cancel</button>
  </div>

  `,
  styleUrls: []
})
export class HologramDailyIndentFormComponent implements OnInit {

  constructor(private saveDailyIndentDialog:MatDialog) { }

  ngOnInit() {
  }
  saveDailyIndent(){
    this.saveDailyIndentDialog.open(HologramDailyIndentFormSavedComponent);
  }

}
