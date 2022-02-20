import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './screens/admin/admin.component';
import { AddMemberComponent } from './screens/admin/components/add-member/add-member.component';
import { AddProjectComponent } from './screens/admin/components/add-project/add-project.component';
import { AddTaskComponent } from './screens/admin/components/add-task/add-task.component';
import { DashboardComponent } from './screens/admin/components/dashboard/dashboard.component';
import { EditMemberComponent } from './screens/admin/components/edit-member/edit-member.component';
import { EditProjectComponent } from './screens/admin/components/edit-project/edit-project.component';
import { ListTaskComponent } from './screens/admin/components/list-task/list-task.component';
import { MemberComponent } from './screens/admin/components/member/member.component';
import { ProjectComponent } from './screens/admin/components/project/project.component';
import { EditTaskComponent } from './screens/admin/edit-task/edit-task.component';
import { TaskComponent } from './screens/admin/task/task.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    redirectTo: 'admin/dashboard',
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'dashboard/member',
        component: MemberComponent,
      },
      {
        path: 'dashboard/project',
        component: ProjectComponent,
      },
      {
        path: 'dashboard/task',
        component: TaskComponent,
      },
      {
        path: 'dashboard/project/add-project',
        component: AddProjectComponent,
      },
      {
        path: 'dashboard/project/edit-project/:projectId',
        component: EditProjectComponent,
      },
      {
        path: 'dashboard/task/edit-task/:taskId',
        component: EditTaskComponent,
      },
      {
        path: 'dashboard/project/list-task/:projectId/add-task',
        component: AddTaskComponent,
      },
      {
        path: 'dashboard/project/list-task/:projectId',
        component: ListTaskComponent,
      },
      {
        path: 'dashboard/project/list-task/add-task',
        component: AddTaskComponent,
      },
      {
        path: 'dashboard/task/add-task',
        component: AddTaskComponent,
      },
      {
        path: 'dashboard/member/add-member',
        component: AddMemberComponent,
      },
      {
        path: 'dashboard/member/edit-member/:userId',
        component:EditMemberComponent,
      },

    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
