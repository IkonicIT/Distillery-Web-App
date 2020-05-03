import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FeedbackService } from 'src/app/services/apiServices/feedback.services';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
    
  
  constructor(private _formBuilder: FormBuilder,private _feedbackService:FeedbackService) { }

  columnDefs = [
    { headerName: 'S.NO', field: 'sno' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Reported By', field: 'reported' },
    { headerName: 'Mobile Number', field: 'mobile' },
    { headerName: 'Issue', field: 'issue' },
    { headerName: 'Reported Date and Time', field: 'time' },
    { headerName: 'Status', field: 'status' },
    { headerName: 'Rating', field: 'rating' }
    
  ];

  rowData = [];

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
      this.getAllFeedback();
  }

  getAllFeedback(){
    // this.rowData = data['response Date List'];
  }
}