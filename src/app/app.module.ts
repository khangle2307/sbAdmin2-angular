import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ChartComponent } from './components/chart/chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ColorsComponent } from './components/colors/colors.component';
import { BordersComponent } from './components/borders/borders.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { OtherComponent } from './components/other/other.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarComponent,
    LineChartComponent,
    PieChartComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotfoundComponent,
    ChartComponent,
    DashboardComponent,
    BarchartComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    PaginationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
