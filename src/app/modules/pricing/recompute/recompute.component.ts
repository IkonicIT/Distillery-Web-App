import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recompute',
  templateUrl: './recompute.component.html',
  styleUrls: ['./recompute.component.css']
})
export class RecomputeComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/recompute'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
