import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ExportIndentExportComponent } from '../export-indent-export/export-indent-export.component';
import { ExportStatusIndentComponent } from '../export-status-indent/export-status-indent.component';


@Component({
  selector: 'app-export-export',
  templateUrl: './export-export.component.html',
  styleUrls: ['./export-export.component.css']
})
export class ExportExportComponent implements OnInit {

  constructor(private indentDialog:MatDialog, private statusDialog:MatDialog) { }

  ngOnInit() {
  }
exportIndent(){
  let config:MatDialogConfig={
    width:'1200px'
  }
  this.indentDialog.open(ExportIndentExportComponent,config);
}

status(){
  this.statusDialog.open(ExportStatusIndentComponent);
}

}
