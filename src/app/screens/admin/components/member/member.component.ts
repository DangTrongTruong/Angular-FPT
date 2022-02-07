import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members = [
    {
      id: 1,
      name: 'Truong',
      email:'truongdtph13126@gmail.com'
    },
    {
      id:2,
      name: 'Loc',
      email:'loc@gmail.com'
    },
    {
      id:3,
      name: 'Dung',
      email:'dung@gmail.com'
    },
    {
      id:4,
      name: 'Hai',
      email:'hai@gmail.com'
    },
    {
      id:5,
      name: 'Huy',
      email:'huy@gmail.com'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
