import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
projects = [
    {
      id: 1,
      date:Date.now(),
      name: "Dự án 1",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 2,
      date:Date.now(),
      name: "Dự án 2",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 3,
      date:Date.now(),
      name: "Dự án 3",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 4,
      date:Date.now(),
      name: "Dự án 4",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 5,
      date:Date.now(),
      name: "Dự án 5",
      members: Math.floor(Math.random() * 10),
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
