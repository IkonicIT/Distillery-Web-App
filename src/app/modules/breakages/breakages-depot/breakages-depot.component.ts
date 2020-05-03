import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BreakagesDepotService} from 'src/app/services/apiServices/breakagesDepot.service';
import { catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-depot',
  templateUrl: './breakages-depot.component.html',
  styleUrls: ['./breakages-depot.component.css']
})
export class BreakagesDepotComponent implements OnInit {
  displayedColumns = ['scannedDate', 'breakageId', 'caseBarNo','productCode','brandName', 'productType'];
  dataSource: MatTableDataSource<UserData>;
  response = [];
  startDate: any = {};
  endDate: any = {};
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  ngOnInit() {
    if (!(this.permServ.getPermission('home/breakages') && this.permServ.getPermission('home/breakages/breakages-depot'))) {
      this.router.navigateByUrl('home/breakages');
    }
  }
  constructor(private router: Router, private _breakageDepotService:BreakagesDepotService,
              public _http:HttpService, private permServ: NgxPermissionsService) {
    this._breakageDepotService.getfetchbreakageDts().subscribe((data) => {
      this.response= data.responseData;
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  navToBreakages() {
    this.router.navigate(['../home/breakages']);
  }
  print() {
    window.print();
  }
  selectStartDate(event){
    this.startDate=event.target.value
  }
  selectEndDate(event){
    this.endDate = event.target.value
  }
  searchBreakage(event) { 
    console.log(event.target.value)

  //  console.log(this.startDate)
    const url_ = 'breakage/dateWiseStmts?startDate='+this.startDate+'&endDate='+this.endDate+'';
    const params = new URLSearchParams();

    return this._http.post(url_,params)
      .subscribe((data: any) => {
        this.response=data.responseData
        console.log(data.responseData)
        console.log(JSON.stringify(this.response))
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
    scannedDate: 'Date',
    breakageId: "Breakage ID",
    caseBarNo: "Case BarNo",
    productCode : "Product Code",
    brandName: "Brand Name",
    productType: "Product Type"
};

var itemsNotFormatted = this.response;

var itemsFormatted = [];

// format the data
itemsNotFormatted.forEach((item) => {
    itemsFormatted.push({
      scannedDate: item.scannedDate,
      breakageId: item.breakageId,
      caseBarNo: item.caseBarNo,
      productCode: item.productCode,
      brandName: item.brandName,
      productType: item.productType
    });
});

var fileTitle = 'breakage-depot-list'; // or 'my-unique-title'
  this.exportCSVFile(headers, itemsFormatted, fileTitle);
}
}


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

