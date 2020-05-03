import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet-profiles',
  templateUrl: './outlet-profiles.component.html',
  styleUrls: ['./outlet-profiles.component.css']
})
export class OutletProfilesComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/bcl-outlets') && this.permServ.getPermission('home/bcl-outlets/outlet-profiles'))) {
      this.router.navigateByUrl('home/bcl-outlets');
    }
  }

}
