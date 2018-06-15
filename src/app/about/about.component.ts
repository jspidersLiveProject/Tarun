import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

  
})


export class AboutComponent implements OnInit {
  
  constructor(private _dataService:DataService ) { 

    
  }
  publish:string;
  ngOnInit() {
    this.publish =this._dataService.mydata();
  }

}
