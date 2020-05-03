import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-home',
  templateUrl: './import-home.component.html',
  styleUrls: ['./import-home.component.css']
})
export class ImportHomeComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/imports') && this.permServ.getPermission('home/import'))) {
      this.router.navigateByUrl('home/imports');
    }
  }

}
