import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public loading: boolean = true;
  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      this.loading=false;
    },2000) 

  }
}
