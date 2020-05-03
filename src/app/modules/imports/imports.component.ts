import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.css']
})
export class ImportsComponent implements OnInit {
  hasImportPerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasImportPerm = this.permServ.getPermission('home/imports') ? true : false;
  }

}
