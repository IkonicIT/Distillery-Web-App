import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-spirit-unload',
  templateUrl: './spirit-unload.component.html',
  styleUrls: ['./spirit-unload.component.css']
})
export class SpiritUnloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(){
    let config:MatDialogConfig={
      height:'150px',
      width:'300px'
    }

}
}

