import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.css']
})
export class T2Component implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') && this.permServ.getPermission('home/licensee-profiles/t2'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}
