import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mrp-performance',
  templateUrl: './mrp-performance.component.html',
  styleUrls: ['./mrp-performance.component.css']
})
export class MrpPerformanceComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/mrp-performance'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
