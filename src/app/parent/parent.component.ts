import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myName;
  myEmail;
  constructor() { }

  ngOnInit(): void {
    this.myName = "Ahmad"
    this.myEmail = "Ahmad@gmail.com"
  }

}
