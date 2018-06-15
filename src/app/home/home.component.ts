import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  store: string;
  btntext: string = 'login';
  user:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  clicked() {
    this.user= 'Hello ' + this.store;
    this.store = '';
    
    const tablet= 'member';
    this.router.navigate([tablet], { skipLocationChange: true });
    

  }
}
