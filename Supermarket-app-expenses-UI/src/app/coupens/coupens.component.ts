import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupens',
  templateUrl: './coupens.component.html',
  styleUrls: ['./coupens.component.scss']
})
export class CoupensComponent implements OnInit {

  expanded: boolean = false;

  toggleDetails() {
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit(): void {
  }

}