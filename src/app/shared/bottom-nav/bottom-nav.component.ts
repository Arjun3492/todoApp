import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
// import { Router,NavigationEnd } from "@angular/router";


@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  currentPath:string='';

  constructor(  location: Location) {
   location.onUrlChange(p=>{
    this.currentPath=location.path();
    });
  }

  ngOnInit(): void {
  }

}
