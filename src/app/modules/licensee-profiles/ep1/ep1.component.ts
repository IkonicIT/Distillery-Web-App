import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ep1',
  templateUrl: './ep1.component.html',
  styleUrls: ['./ep1.component.css']
})
export class Ep1Component implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') && this.permServ.getPermission('home/licensee-profiles/ep1'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}
