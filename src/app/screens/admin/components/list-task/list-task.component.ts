import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks = [
    {
      id: 1,
      projectId:1,
      name: 'Task 1',
      description:"task 1 project 1",
      status:'pending'
    },
    {
      id: 2,
      projectId:1,
      name: 'Task 2',
      description:"task 2 project 1",
      status:'reject'
    },
    {
      id: 1,
      projectId:2,
      name: 'Task 1',
      description:"task 1 project 2",
      status:'resolve'
    },
    {
      id: 2,
      projectId:2,
      name: 'Task 2',
      description:"task 2 project 2",
      status:'resolve'
    },
    {
      id: 3,
      projectId:2,
      name: 'Task 3',
      description:"task 3 project 2",
      status:'resolve'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
