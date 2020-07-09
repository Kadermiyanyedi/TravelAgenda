import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { ApiService } from '../_services/api.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this._apiService.getPosts().subscribe(
      data => this.posts = data

    );
  }
  add(title: string, detail: string) {
    var user = localStorage.getItem("id")
    var data = { 'post_title': title, 'post_detail': detail, "user": user };
    this._apiService.addPost(data).subscribe(post => this.posts.push(post));
  }
}
