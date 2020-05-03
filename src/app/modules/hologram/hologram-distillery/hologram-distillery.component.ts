import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hologram-distillery',
  templateUrl: './hologram-distillery.component.html',
  styleUrls: ['./hologram-distillery.component.css']
})
export class HologramDistilleryComponent implements OnInit {

  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/hologram') && this.permServ.getPermission('home/hologram/distillery'))) {
      this.router.navigateByUrl('home/hologram');
    }
  }

}
