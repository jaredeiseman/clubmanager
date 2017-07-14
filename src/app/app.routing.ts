import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddMemberComponent } from './add-member/add-member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'clubmembers',
    component: ListMembersComponent
  },
  {
    path: 'member/:id',
    component: MemberDetailComponent
  },
  {
    path: 'addmember',
    component: AddMemberComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
