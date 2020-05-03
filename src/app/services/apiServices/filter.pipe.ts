import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  constructor(public datePipe: DatePipe) {
  }

  transform(items: any[], searchWith: any[], searchText: string, dateFormat: any, id?: boolean): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    // tslint:disable-next-line:only-arrow-functions
    return _.filter(items, function(item: any): any {
      if (dateFormat) {
        dateFormat.forEach(val => {
          item[val.Fields] = item[val.Fields] ? moment(item[val.Fields]).format(val.dateFormat) : item[val.Fields];
        });
      }
      let pick: any;
      if (!id) {
        pick = _.pick(item, _.without(searchWith, 'id'));
      } else {
        pick = _.pick(item, searchWith);
      }
      Object.keys(pick).forEach(key => {
        if (key && pick[key]) {
          pick[key] = (pick[key].toString());
        }
      });
      // tslint:disable-next-line:no-string-literal
      return JSON.stringify(Object['values'](pick)).toLowerCase().includes(searchText.toLowerCase());
    });

  }

  transformByDateRange(startDate: any, endDate: any, items: any[], selector: any): any[] {
    const from = startDate ? moment(moment(this.getDate(startDate)).format('MM/DD/YYYY')).toDate() : moment().toDate();
    const to = endDate ? moment(moment(this.getDate(endDate)).format('MM/DD/YYYY')).toDate() : moment().toDate();
    const itemsList = Object.assign(items);
    return itemsList.filter((item: any) => this.compareDates(item, from, to, selector));
  }

  compareDates(item: any, from: any, to: any, prop: string): boolean {
    const sDate = moment(moment(this.getDate(item[prop])).format('MM/DD/YYYY')).toDate();
    return moment(sDate).isSameOrAfter(from) && moment(sDate).isSameOrBefore(to);
  }

  getDate(df: string): any {
    return moment.utc(df).format('l');
  }
}

