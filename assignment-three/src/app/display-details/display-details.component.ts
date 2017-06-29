import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showDetails: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  onShowDetails(){
    this.showDetails = true;
  }

}
