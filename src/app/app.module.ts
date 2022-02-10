import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { DashboardComponent } from './screens/admin/components/dashboard/dashboard.component';
import { AdminComponent } from './screens/admin/admin.component';
import { ProjectComponent } from './screens/admin/components/project/project.component';
import { AddProjectComponent } from './screens/admin/components/add-project/add-project.component';
import { ListTaskComponent } from './screens/admin/components/list-task/list-task.component';
import { AddTaskComponent } from './screens/admin/components/add-task/add-task.component';
import { MemberComponent } from './screens/admin/components/member/member.component';
import { AddMemberComponent } from './screens/admin/components/add-member/add-member.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    ProjectComponent,
    AddProjectComponent,
    ListTaskComponent,
    AddTaskComponent,
    MemberComponent,
    AddMemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
