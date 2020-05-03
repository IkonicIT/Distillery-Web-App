import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ShortagesService} from 'src/app/services/apiServices/shortages.service'
import { catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-shortages',
  templateUrl: './shortages.component.html',
  styleUrls: ['./shortages.component.css']
})
export class ShortagesComponent implements OnInit {
  displayedColumns = ['shortageId', 'scannedDate', 'caseBarNo','healNumber','productCode', 'productType', 'batchNo'];
  dataSource: MatTableDataSource<UserData>;
  response = [];
  startDate: any = {};
  endDate: any = {};
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  ngOnInit() {
    if (!(this.permServ.getPermission('home/breakages') && this.permServ.getPermission('home/breakages/shortage'))) {
      this.router.navigateByUrl('home/breakages');
    }
  }
  constructor(private router: Router, private _shortagesService: ShortagesService,
              public _http: HttpService, private permServ: NgxPermissionsService) {
    this._shortagesService.getfetchshortageDts().subscribe((data) => {
      this.response = data.responseData;
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  navToShortages() {
    this.router.navigate(['../home/breakages']);
  }
  print() {
    window.print();
  }
  selectStartDate(event){
    this.startDate = event.target.valu;
  }
  selectEndDate(event) {
    this.endDate = event.target.value;
  }
  searchShortage(event) { 

  //  console.log(this.startDate)
    const url_ = 'shortage/dateWiseStmts?startDate=' + this.startDate + '&endDate=' + this.endDate + '';
    const params = new URLSearchParams();

    return this._http.post(url_, params)
      .subscribe((data: any) => {
        this.response = data.responseData;
        this.dataSource = new MatTableDataSource(this.response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      );
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}



exportexcel(){
  var headers = {
    shortageId: 'Shortage ID',
    scannedDate: "Date",
    caseBarNo: "Case BarNo",
    healNumber : "Heal Number",
    productCode: "Product Code",
    productType: "Product Type",
    batchNo: "Batch No"
};

var itemsNotFormatted = this.response;

var itemsFormatted = [];

// format the data
itemsNotFormatted.forEach((item) => {
    itemsFormatted.push({
      shortageId: item.shortageId,
      scannedDate: item.scannedDate,
      caseBarNo: item.caseBarNo,
      healNumber: item.healNumber,
      productCode: item.productCode,
      productType: item.productType,
      batchNo: item.batchNo
    });
});

var fileTitle = 'shortage-list'; // or 'my-unique-title'
  this.exportCSVFile(headers, itemsFormatted, fileTitle);
}
}


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

