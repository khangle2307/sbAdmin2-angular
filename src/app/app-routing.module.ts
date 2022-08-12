import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './components/animations/animations.component';
import { BordersComponent } from './components/borders/borders.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartComponent } from './components/chart/chart.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OtherComponent } from './components/other/other.component';
import { TableComponent } from './components/table/table.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: 'chart',
        component: ChartComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'borders',
        component: BordersComponent
      },
      {
        path: 'animations',
        component: AnimationsComponent
      },
      {
        path: 'other',
        component: OtherComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
