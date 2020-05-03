import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-td1-td2',
  templateUrl: './td1-td2.component.html',
  styleUrls: ['./td1-td2.component.css']
})
export class Td1Td2Component implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') && this.permServ.getPermission('home/licensee-profiles/td1-td2'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}
