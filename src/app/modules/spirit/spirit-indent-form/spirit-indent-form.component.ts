import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { config } from 'rxjs';
import { Spirit } from '../../models/interface.service';

@Component({
  selector: 'app-spirit-indent-form',
  templateUrl: './spirit-indent-form.component.html',
  styleUrls: ['./spirit-indent-form.component.css']
})
export class SpiritIndentFormComponent implements OnInit {
  spiritData: any;
  constructor( public dialogRef: MatDialogRef<SpiritIndentFormComponent>,
               @Inject(MAT_DIALOG_DATA) public data: SpiritIndentFormComponent) {

   }

  ngOnInit() {
    this.spiritData = this.data;
  }
  save(): void{
    const config: MatDialogConfig = {
      height: '150px',
      width: '300px'
    };

  }

}







