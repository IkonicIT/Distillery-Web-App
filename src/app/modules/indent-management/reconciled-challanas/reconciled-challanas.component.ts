import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reconciled-challanas',
  templateUrl: './reconciled-challanas.component.html',
  styleUrls: ['./reconciled-challanas.component.css']
})
export class ReconciledChallanasComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService,
              private router: Router) { }

  ngOnInit() {
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/reconciled-challanas'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

}
