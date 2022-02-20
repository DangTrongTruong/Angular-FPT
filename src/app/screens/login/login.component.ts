import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private message: NzMessageService
    ) {}

    submitForm(): void {
      if (this.validateForm.valid) {
        this.auth.login(this.validateForm.value).subscribe(
          (res: any) => {
            if(res){
                if(res.token){
                    localStorage.setItem('currentUser',JSON.stringify({
                      token: res.token,
                      user: res.user
                    }));
                    this.message.success(res.message)

                }else{
                  console.log("No Token");
                }
                this.router.navigate(["admin/dashboard"])
            }
          },
          (error)=>{
              this.message.error("Login fail")
          }
        )
      } else {
        Object.values(this.validateForm.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
  }
