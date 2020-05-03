import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';






@Component({
  selector: 'app-production-line-allocation',
  templateUrl: './production-line-allocation.component.html',
  styleUrls: ['./production-line-allocation.component.css']
})
export class ProductionLineAllocationComponent implements OnInit {

  constructor(private successDialog:MatDialog) { }

  ngOnInit() {
  }
  allocationSuccess(){
    
  }

}
