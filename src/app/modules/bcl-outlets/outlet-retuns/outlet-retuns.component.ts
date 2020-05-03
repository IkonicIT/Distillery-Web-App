import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet-retuns',
  templateUrl: './outlet-retuns.component.html',
  styleUrls: ['./outlet-retuns.component.css']
})
export class OutletRetunsComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/bcl-outlets') && this.permServ.getPermission('home/bcl-outlets/outlet-returns'))) {
      this.router.navigateByUrl('home/bcl-outlets');
    }
  }

}
