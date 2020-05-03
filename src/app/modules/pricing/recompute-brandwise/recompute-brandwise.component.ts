import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recompute-brandwise',
  templateUrl: './recompute-brandwise.component.html',
  styleUrls: ['./recompute-brandwise.component.css']
})
export class RecomputeBrandwiseComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/recompute-brandwise'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
