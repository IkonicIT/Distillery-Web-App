import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depots-challan',
  templateUrl: './depots-challan.component.html',
  styleUrls: ['./depots-challan.component.css']
})
export class DepotsChallanComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/depots') && this.permServ.getPermission('home/depots/depots-challan'))) {
      this.router.navigateByUrl('home/depots');
    }
  }

}
