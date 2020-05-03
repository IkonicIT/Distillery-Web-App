import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-hologram-home',
  templateUrl: './hologram-home.component.html',
  styleUrls: ['./hologram-home.component.css']
})
export class HologramHomeComponent implements OnInit {
  hasHologramPer = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasHologramPer = this.permServ.getPermission('home/hologram') ? true : false;
  }

}
