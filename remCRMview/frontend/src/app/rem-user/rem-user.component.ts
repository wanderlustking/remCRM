import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rem-user',
  templateUrl: './rem-user.component.html',
  styleUrls: ['./rem-user.component.css']
})
export class RemUserComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
