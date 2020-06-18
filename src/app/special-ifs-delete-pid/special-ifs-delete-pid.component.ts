import { Component, OnInit } from '@angular/core';
import { IndentService } from 'src/app/services/apiServices/indent.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-special-ifs-delete-pid',
  templateUrl: './special-ifs-delete-pid.component.html',
  styleUrls: ['./special-ifs-delete-pid.component.css']
})
export class SpecialIfsDeletePidComponent implements OnInit {
  pid: any;
  model: any;

  constructor(private _indentService: IndentService,private route:ActivatedRoute,private router: Router) {
    this.pid = route.snapshot.params['ifsPid'];

    // this.indentNo = route.snapshot.params['id'];  
      console.log('indentno is'+ this.pid);
   }

  ngOnInit() {
   
  }

  delete(){
    this._indentService.deleteproduct(this.pid).subscribe(response=>{
      this.model = response.responseData;
        console.log("ifspid are" + this.model);
      })

  }
}
