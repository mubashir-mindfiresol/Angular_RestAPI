import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { TodoComponent } from './todo/todo.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", redirectTo:"/homepage", pathMatch:"full"},
  {path:"homepage", component:HomepageComponent},
  {path:"user", component:UserComponent},
  {path:"comment", component:CommentComponent},
  {path:"todo", component:TodoComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  HomepageComponent,
  UserComponent,
  CommentComponent,
  TodoComponent,
  NotfoundComponent
];