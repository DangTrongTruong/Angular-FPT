import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './screens/admin/admin.component';
import { AddMemberComponent } from './screens/admin/components/add-member/add-member.component';
import { AddProjectComponent } from './screens/admin/components/add-project/add-project.component';
import { AddTaskComponent } from './screens/admin/components/add-task/add-task.component';
import { DashboardComponent } from './screens/admin/components/dashboard/dashboard.component';
import { ListTaskComponent } from './screens/admin/components/list-task/list-task.component';
import { MemberComponent } from './screens/admin/components/member/member.component';
import { ProjectComponent } from './screens/admin/components/project/project.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:'admin',
    redirectTo: "admin/dashboard",
  },
  {
    path:'admin',
    component: AdminComponent,
    children: [
      {
        path:'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'dashboard/member', component:MemberComponent
      },
      {
        path:'dashboard/project', component: ProjectComponent
      },
      {
        path:'dashboard/project', component: ProjectComponent
      },
      {
        path:'dashboard/member', component: ProjectComponent
      },
      {
        path:'dashboard/project/add-project', component:AddProjectComponent
      },
      {
        path:'dashboard/project/list-task', component:ListTaskComponent
      },
      {
        path:'dashboard/project/list-task/add-task', component:AddTaskComponent
      },
      {
        path:'dashboard/member/add-member', component:AddMemberComponent
      },


    ]
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
