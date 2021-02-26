import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';

import {CommentsService} from './services/comments/comments.service';
import {TodosService} from './services/todos/todos.service';
import {UsersService} from './services/users/users.service';
import { MainNavComponent } from './modules/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DisplayUserComponent } from './modules/display-user/display-user.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [CommentsService,TodosService,UsersService],//Services are introduced here
  bootstrap: [AppComponent]
})
export class AppModule { }