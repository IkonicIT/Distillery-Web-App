import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-f2',
  templateUrl: './f2.component.html',
  styleUrls: ['./f2.component.css']
})
export class F2Component implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') && this.permServ.getPermission('home/licensee-profiles/f2'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}
