import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public activeUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((s: RouterEvent) => {
      if(s.url){
        this.activeUrl = s.url;
      }
    });
  }
}
