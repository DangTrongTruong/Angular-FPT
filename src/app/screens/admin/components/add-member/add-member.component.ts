import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  memberForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    role: new FormControl(),
  });
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.memberForm.value);
    this.userService
      .saveAdd(this.memberForm.value)
      .subscribe((response) => {
        this.route.navigate(['/admin/member']);
      });
  }

}
