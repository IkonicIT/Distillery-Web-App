import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elite',
  templateUrl: './elite.component.html',
  styleUrls: ['./elite.component.css']
})
export class EliteComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/licensee-profiles') && this.permServ.getPermission('home/licensee-profiles/elite'))) {
      this.router.navigateByUrl('home/licensee-profiles');
    }
  }

}
