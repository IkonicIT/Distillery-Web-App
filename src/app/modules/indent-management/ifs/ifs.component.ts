import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-ifs',
  templateUrl: './ifs.component.html',
  styleUrls: ['./ifs.component.css']
})
export class IfsComponent implements OnInit {

  constructor(private saveDialog: MatDialog, private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!this.permissionServ.getPermission('home/module/indent')) {
      this.router.navigateByUrl('home/indent-management');
    }
  }
  save() {
    const config: MatDialogConfig={
      height: '150px',
      width: '300px'
    };
  }

}
