import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ManualProductionCaseAssociationPreviewComponent } from '../manual-production-case-association-preview/manual-production-case-association-preview.component';

@Component({
  selector: 'app-manual-production-case-association',
  templateUrl: './manual-production-case-association.component.html',
  styleUrls: ['./manual-production-case-association.component.css']
})
export class ManualProductionCaseAssociationComponent implements OnInit {

  constructor(private previewCaseDialog:MatDialog) { }

  ngOnInit() {
  }
  previewCase(){
    this.previewCaseDialog.open(ManualProductionCaseAssociationPreviewComponent);
  }
}
