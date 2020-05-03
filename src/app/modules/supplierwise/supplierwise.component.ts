import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierwise',
  templateUrl: './supplierwise.component.html',
  styleUrls: ['./supplierwise.component.css']
})
export class SupplierwiseComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/module/transactions') && this.permServ.getPermission('home/module/supplierwise'))) {
      this.router.navigateByUrl('home/module/transactions');
    }
  }

}
