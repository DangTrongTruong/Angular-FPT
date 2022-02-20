import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  userId: string =''
  memberForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    role: new FormControl(),
  });
  constructor(private userService: UserService, private route: Router,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(urlParams => {
      this.userId = urlParams['userId'];
      this.userService.getOne(this.userId).subscribe(data => {
        this.memberForm.patchValue(data.user);
      })
    })
  }

  submitForm() {
    console.log(this.memberForm.value);
    this.userService.saveEdit(this.memberForm.value, this.userId).subscribe(response => {
      console.log(response)
      this.route.navigate(['/admin/member']);
    });
  }

}
