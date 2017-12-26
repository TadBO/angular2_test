import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMyDirective } from './app.my.directive';

import { AppMyComponent } from './app.my.component';
import { LoggerService } from './logger.service';
import { AppChildComponent } from './app.my.child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroService } from './hero.service';
import { AppMyToUpperCase } from './app.my.toUpperCase';
import { AppMyUserInfoComponent } from './app.my.userInfo';
import { AlertModule, TabsModule } from 'ngx-bootstrap';

//路由模块
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app.home.component';

import { HomeComponent } from './HomePage/home.component';
import { ListComponent } from './ListPage/list.component';
import { ListOnePageComponent } from './ListPage/listOnePage.component';
import { ListTwoPageComponent } from './ListPage/listTwoPage.component';


//定义嵌套路由
const appChildRoutes: Routes = [
  {
    path: 'one',
    component: ListOnePageComponent
  },
  {
    path: 'two/:id',
    component: ListTwoPageComponent
  }
];

//定义一级路由
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ListComponent,
    children: appChildRoutes
  }
];




@NgModule({
  declarations: [
    AppMyComponent,
    AppMyDirective,
    AppChildComponent,
    ListComponent,
    HomeComponent,
    AppMyToUpperCase,
    ListOnePageComponent,
    ListTwoPageComponent,
    AppMyUserInfoComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    LoggerService,
    HeroService
  ],
  bootstrap: [
    AppHomeComponent
  ]
})
export class AppMyModule {}
