import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HologramPurchaseIndentStatusViewForwardButtonComponent } from '../hologram-purchase-indent-status-view-forward-button/hologram-purchase-indent-status-view-forward-button.component';

@Component({
  selector: 'app-hologram-purchase-indent-status-view',
  templateUrl: './hologram-purchase-indent-status-view.component.html',
  styleUrls: ['./hologram-purchase-indent-status-view.component.css']
})
export class HologramPurchaseIndentStatusViewComponent implements OnInit {

  constructor(private forward:MatDialog) { }

  ngOnInit() {
  }
  forwardButton(){
    this.forward.open(HologramPurchaseIndentStatusViewForwardButtonComponent);
  }

}
