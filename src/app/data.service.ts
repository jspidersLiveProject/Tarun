import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  mydata(){
    return 'this is my data';
  }

}
