import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filed-error',
  templateUrl: './filed-error.component.html',
  styleUrls: ['./filed-error.component.css']
})
export class FiledErrorComponent implements OnInit {
  @Input() errorList: any[];
  @Input() control: FormControl;
  errorMessage: any;
  constructor() { }

  ngOnInit() {
    this.errorMessage = {
      required: 'This field is required.'
    };
  }
  getErrorMessage(err: string): string {
    return this.errorMessage[err];
  }
}
