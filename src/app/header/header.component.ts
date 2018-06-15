import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  features = ['Home', 'Travel', 'About']

  constructor(private router: Router) { }

  ngOnInit() {
    
  }


  buttonClicked(feature) {
    const tab: string = '/' + feature;
    this.router.navigate([" "], { skipLocationChange: true });
  }
}
