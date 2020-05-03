import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofs-approval',
  templateUrl: './ofs-approval.component.html',
  styleUrls: ['./ofs-approval.component.css']
})
export class OfsApprovalComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/ofs-approval'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
