import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspended-retailers',
  templateUrl: './suspended-retailers.component.html',
  styleUrls: ['./suspended-retailers.component.css']
})
export class SuspendedRetailersComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') && this.permServ.getPermission('home/licensee-profiles/suspended-retailers'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}
