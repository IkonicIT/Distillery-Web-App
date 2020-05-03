import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductionLineEditBatchQuantitySuccessComponent } from '../production-line-edit-batch-quantity-success/production-line-edit-batch-quantity-success.component';

@Component({
  selector: 'app-production-line-edit-batch-quantity',
  templateUrl: './production-line-edit-batch-quantity.component.html',
  styleUrls: ['./production-line-edit-batch-quantity.component.css']
})
export class ProductionLineEditBatchQuantityComponent implements OnInit {

  constructor(private quantity:MatDialog) { }

  ngOnInit() {
  }
  updateQty(){
    this.quantity.open(ProductionLineEditBatchQuantitySuccessComponent);
  }

}
