import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members:  Array<any> = [];
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe(response => {
      this.members = response.users;
      console.log(response);
    })
  }

  removeMember(id: number){
    if(window.confirm('Ban co chac chan muon xoa khong ?')){
      this.userService.remove(id).subscribe(() => {
        this.members = this.members.filter(item => item._id != id);
      })
    }
  }

}
