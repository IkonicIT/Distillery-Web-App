import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductionLinePreviewComponent } from '../production-line-preview/production-line-preview.component';

@Component({
  selector: 'app-production-line-information',
  templateUrl: './production-line-information.component.html',
  styleUrls: ['./production-line-information.component.css']
})
export class ProductionLineInformationComponent implements OnInit {

  constructor(private previewDialog:MatDialog) { }

  ngOnInit() {
  }
  preview(){
    this.previewDialog.open(ProductionLinePreviewComponent);
  }

}
