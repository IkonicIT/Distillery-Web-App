import { Injectable } from '@angular/core';

@Injectable()
export class SidemenuService {
    private data: any = undefined;

    setData(data: any): void {
        this.data = data;
    }

    getData(): any {
        return this.data;
    }
}