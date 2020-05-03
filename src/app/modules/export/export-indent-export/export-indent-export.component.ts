import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExportIndentExportSaveComponent } from '../export-indent-export-save/export-indent-export-save.component';

@Component({
  selector: 'app-export-indent-export',
  templateUrl: './export-indent-export.component.html',
  styleUrls: ['./export-indent-export.component.css']
})
export class ExportIndentExportComponent implements OnInit {

  constructor(private saveDialog:MatDialog) { }

  ngOnInit() {
  }

save(){
  this.saveDialog.open(ExportIndentExportSaveComponent);
}

}
