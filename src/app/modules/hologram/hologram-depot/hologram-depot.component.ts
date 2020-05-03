import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hologram-depot',
  templateUrl: './hologram-depot.component.html',
  styleUrls: ['./hologram-depot.component.css']
})
export class HologramDepotComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/hologram') && this.permServ.getPermission('home/hologram/depot'))) {
      this.router.navigateByUrl('home/hologram');
    }
  }

}
