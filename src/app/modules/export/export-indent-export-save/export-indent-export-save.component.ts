import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IndentExportSubmittedComponent } from '../indent-export-submitted/indent-export-submitted.component';

@Component({
  selector: 'app-export-indent-export-save',
  templateUrl: './export-indent-export-save.component.html',
  styleUrls: ['./export-indent-export-save.component.css']
})
export class ExportIndentExportSaveComponent implements OnInit {

  constructor( private submitDialog:MatDialog) { }

  ngOnInit() {
  }

submitted(){
  this.submitDialog.open(IndentExportSubmittedComponent);
}

}
