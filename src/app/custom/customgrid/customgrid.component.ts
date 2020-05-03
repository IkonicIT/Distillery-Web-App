import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'custom-grid',
  templateUrl: './customgrid.component.html',
  styleUrls: ['./customgrid.component.css']
})
export class CustomgridComponent implements OnInit {

  @Input() rowData: [];
  @Input() columnDefs: [];

  quickSearchValue: string = '';

  constructor(private router: Router) { }

  defaultColDef = {
    width: 100,
    resizable: true,
    sortable: true
  };


  ngOnInit() {
  }
  navTohome() {
    this.router.navigate(['../features']);
  }

}
