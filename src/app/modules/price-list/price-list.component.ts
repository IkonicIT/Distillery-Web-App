import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IndentService } from 'src/app/services/apiServices/indent.service';


@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private _indentService:IndentService) { }
  columnDefs = [
    { headerName: 'S.NO', field: 'sno' },
    { headerName: 'Brand Number', field: 'brandnumber' },
    { headerName: 'Size Code', field: 'sizeCode' },
    { headerName: 'Pack Type', field: 'packtype' },
    { headerName: 'Product Name', field: 'productname' },
    { headerName: 'Issue Price', field: 'issueprice' },
    { headerName: 'Special Margin', field: 'specialmargin' },
    { headerName: 'MRP', field: 'mrp' },
    { headerName: 'Type', field: 'type' }
    
  ];
  rowData = [
    {
      "sno":"1",
      "brandnumber":"1234",
      "sizecode":"2345",
      "packtype":"small",
      "productname":"wine",
      "issueprice":"2000",
      "specialmargin":"1000",
      "mrp":"2000",
      "type":"wine"
    }
  ];

  ngOnInit() {
    this.getAllPriceList();

  }
  getAllPriceList(){
    // this.rowData = data['response Date List'];
  }
}
