import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PostsComponent } from './posts/posts.component'
import { LoginComponent } from './login/login.component'
import { ApiService } from './_services/api.service'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: PostsComponent },
  { path: 'detail/:id', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
