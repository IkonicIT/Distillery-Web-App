import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-spirit-home',
  templateUrl: './spirit-home.component.html',
  styleUrls: ['./spirit-home.component.css']
})
export class SpiritHomeComponent implements OnInit {
  hasSpiritPerm = false;
  constructor(private permServ: NgxPermissionsService) { }

  ngOnInit() {
    this.hasSpiritPerm = this.permServ.getPermission('home/spirit') ? true : false;
  }

}
