import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-user-list',
  templateUrl: './rem-user-list.component.html',
  styleUrls: ['./rem-user-list.component.css']
})
export class RemUserListComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Ari','Jack','Mike','George'];
  }

  ngOnInit() {
  }

}
