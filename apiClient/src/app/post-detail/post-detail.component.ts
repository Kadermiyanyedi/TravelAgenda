import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post'
import { ApiService } from '../_services/api.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;

  constructor(private _route: ActivatedRoute, private _apiService: ApiService, private _location: Location) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this._apiService.getPost(parseInt(id)).subscribe(data => {
      this.post = data
      this._apiService.getPostAuthor(parseInt(data['user'])).subscribe(user => this.post["post_author"] = user.username)
    });
  }

  goBack(): void {
    this._location.back();
  }

}
