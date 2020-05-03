import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-finished',
  templateUrl: './lab-finished.component.html',
  styleUrls: ['./lab-finished.component.css']
})
export class LabFinishedComponent implements OnInit {
  constructor(private permServ: NgxPermissionsService, private router: Router) { }

  ngOnInit() {
    if (!(this.permServ.getPermission('home/lab') && this.permServ.getPermission('home/lab/finished'))) {
      this.router.navigateByUrl('home/lab');
    }
  }

}
