import { Component,ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductsListRefreshedComponent } from '../products-list-refreshed/products-list-refreshed.component';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductionService} from 'src/app/services/apiServices/production.service'
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['productCode', 'brandName', 'size','packType','basePrice','exciseDuty','mrp','segment'];
  dataSource: MatTableDataSource<UserData>;
  response = [];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private _ProductionService: ProductionService,
              private permService: NgxPermissionsService, private router: Router) {
    this._ProductionService.getProducts().subscribe((data) => {
      this.response=data.responseData
      console.log(data.responseData)
      console.log(JSON.stringify(this.response))
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  
    
  }

  ngOnInit() {
    if (!(this.permService.getPermission('home/production') && this.permService.getPermission('home/production/products'))) {
      this.router.navigateByUrl('home/production');
    }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
// refresh(){
//   this.products.open(ProductsListRefreshedComponent);
// }
}


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
