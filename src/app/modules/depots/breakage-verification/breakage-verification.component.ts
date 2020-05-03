import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakage-verification',
  templateUrl: './breakage-verification.component.html',
  styleUrls: ['./breakage-verification.component.css']
})
export class BreakageVerificationComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/depots') && this.permServ.getPermission('home/depots/depots-breakage-verification'))) {
      this.router.navigateByUrl('home/depots');
    }
  }

}
