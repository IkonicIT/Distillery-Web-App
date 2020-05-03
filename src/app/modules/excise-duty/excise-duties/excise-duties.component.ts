import {Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ExciseDutiesService} from 'src/app/services/apiServices/exciseduties.service'
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-excise-duties',
  templateUrl: './excise-duties.component.html',
  styleUrls: ['./excise-duties.component.css']
})

export class ExciseDutiesComponent implements OnInit {
  displayedColumns = ['challanNo', 'description', 'transactionType','openinigBalance','credit','debit','closingBalance','creationDate'];
  dataSource: MatTableDataSource<UserData>;
  response = [];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  ngOnInit() {
    if (!(this.permServ.getPermission('home/excise') && this.permServ.getPermission('home/excise-duty/duties'))) {
      this.router.navigateByUrl('home/excise');
    }
  }
  constructor(private router: Router, private _exciseDutiesService: ExciseDutiesService,
              private permServ: NgxPermissionsService) {
    this._exciseDutiesService.getExciseDuties().subscribe((data) => {
      this.response = data.responseData;
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  navToExcise() {
    this.router.navigate(['../home/excise']);
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
    challanNo: 'Challan No',
    description: "Description",
    transactionType: "Transaction Type",
    openinigBalance : " Openinig Balance",
    credit: "Credit",
    debit: "Debit",
    closingBalance: "Closing Balance",
    creationDate: "Creation Date"
};

var itemsNotFormatted = this.response;

var itemsFormatted = [];

// format the data
itemsNotFormatted.forEach((item) => {
    itemsFormatted.push({
      challanNo: item.challanNo,
      description: item.description,
      transactionType: item.transactionType,
      openinigBalance: item.openinigBalance,
      credit: item.credit,
      debit: item.debit,
      closingBalance: item.closingBalance,
      creationDate: item.creationDate
    });
});

var fileTitle = 'exciseduty-list'; // or 'my-unique-title'
  this.exportCSVFile(headers, itemsFormatted, fileTitle);
}
}


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

