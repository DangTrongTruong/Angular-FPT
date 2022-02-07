import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalProject = Math.floor(Math.random() * 101);
  totalMember = Math.floor(Math.random() * 101);
  completedTask = Math.floor(Math.random() * 1000);
  doingTask = Math.floor(Math.random() * 1000);
  constructor() { }

  ngOnInit(): void {
  }

}
