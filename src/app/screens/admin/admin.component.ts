import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: Router,private auth: AuthService) { }

  ngOnInit(): void {

  }

  logout(){
      this.auth.logout().subscribe(() => {
        this.route.navigate(['/login']);
      })
  }
}
