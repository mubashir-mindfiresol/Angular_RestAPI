import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { UserComponent } from './modules/user/user.component';
import { CommentComponent } from './modules/comment/comment.component';
import { TodoComponent } from './modules/todo/todo.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';

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


//Any Module getting added to the Route should be inserted here
export const routingComponents=[
  HomepageComponent,
  UserComponent,
  CommentComponent,
  TodoComponent,
  NotfoundComponent
];