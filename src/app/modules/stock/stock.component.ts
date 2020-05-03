import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StockService } from 'src/app/services/apiServices/stock.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  encapsulation: ViewEncapsulation.None
})


  export class StockComponent implements OnInit {
  hasStockPerm = false;
  public data : object[];  
  public allStockTitle : string;
  public distilleryTitle : string;
  public retailTitle : string;
  public allStockLabel: object;
  public allStockLegend : object;
  public allStockToolTip : object;

  constructor(private _formBuilder: FormBuilder, private _stockService: StockService,
              private permServ: NgxPermissionsService) {
    this.allStockTitle='All Stock';
    this.distilleryTitle='Distillery Stock';
    this.retailTitle='Retailer Stock';
    this.data=[
      { name : 'Wine', value : 37, text : '37%' },
      { name : 'Beer', value : 29, text : '29%' },
      { name : 'Whisky', value : 17, text : '17%' },
      { name : 'Rum', value : 17, text : '17%' }

    ];
    this.allStockLabel={
      visible: true,
      position: 'Inside',
      name: 'text'
    };
    // this.allStockLegend={
    //   visible:true,
    //   position:'Bottom',
    //   height: '8%',
    //   width: '35%'
    // };
    this.allStockToolTip={
      enable: true,
      format : '${point.x} : <b>${point.y}%</b> '
    }
   }

  columnDefs = [
    { headerName: 'product Code', field: 'productCode' },
    { headerName: 'Brand Name', field: 'brandName' },
    { headerName: 'Stock Type', field: 'stockType' },
    { headerName: 'Size(ml)', field: 'Size(ml)' },
    { headerName: 'Opening  Stock(in bottles)', field: 'openingBalance' },
    { headerName: 'production', field: 'production' },
    { headerName: 'Sales', field: 'shortages' },
    { headerName: 'Closing Balance(btls)', field: 'closingBalance' },
     { headerName: 'Breakages(btls)', field: 'breakages' },
    { headerName: 'Shortages(btls)', field: 'shortages' },
    { headerName: 'Date', field: 'date' }
   
  ];

  rowData = [

  ];

  

  ngOnInit() {
     this.hasStockPerm = this.permServ.getPermission('home/module/stock') ? true : false;
     if (this.hasStockPerm) {
        this.getAllStock();
      }
  }

/**
 *   getAllIndentData(){
    const req ={
      "pageInfo":{
      "pageNumber":0,
      "pageSize":5,
      "sortBy":"indent_detail_id"
      },
      "requestData":null
      }
      this._indentService.getAllIndents(req).subscribe(data=>{
console.log(data);
this.rowData = data['response Date List'];
      })    
  }
 */


  getAllStock(){
    const req ={
      "pageInfo":{
      "pageNumber":0,
      "pageSize":5,
      "sortBy":"indent_detail_id"
      },
      "requestData":null
      }
      this._stockService.getAllStocks(req).subscribe(data=>{
console.log(`stock data `,data);
this.rowData = data['response Date List'];
      }) 
  }
}



  
  