import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet-status',
  templateUrl: './outlet-status.component.html',
  styleUrls: ['./outlet-status.component.css']
})
export class OutletStatusComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/bcl-outlets') && this.permServ.getPermission('home/bcl-outlets/outlet-status'))) {
      this.router.navigateByUrl('home/bcl-outlets');
    }
  }

}
