import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HologramPurchaseIndentFormSavedComponent } from '../hologram-purchase-indent-form-saved/hologram-purchase-indent-form-saved.component';

@Component({
  selector: 'app-hologram-purchase-indent-form',
  templateUrl: './hologram-purchase-indent-form.component.html',
  styleUrls: ['./hologram-purchase-indent-form.component.css']
})
export class HologramPurchaseIndentFormComponent implements OnInit {

  constructor(private savedDialog:MatDialog) { }

  ngOnInit() {
  }
save(){
  this.savedDialog.open(HologramPurchaseIndentFormSavedComponent);
}
}
