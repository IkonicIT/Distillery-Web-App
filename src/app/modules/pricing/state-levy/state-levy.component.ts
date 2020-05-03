import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-levy',
  templateUrl: './state-levy.component.html',
  styleUrls: ['./state-levy.component.css']
})
export class StateLevyComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/pricing') && this.permServ.getPermission('home/pricing/state-levy'))) {
      this.router.navigateByUrl('home/pricing');
    }
  }

}
