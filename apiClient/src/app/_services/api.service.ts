import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };
  private Url = 'http://localhost:8000/';
  private getTokenUrl = 'http://localhost:8000/api/login/';
  constructor(private http: HttpClient, private _router: Router) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.Url + "posts", this.httpOptions)
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.Url + "posts/" + id, this.httpOptions)
  }
  addPost(post: any): Observable<Post> {
    return this.http.post<Post>(this.Url + "posts", post, this.httpOptions)
  }
  loginGetToken(username: string, password: string) {
    const login_info = { 'username': username, 'password': password };
    return this.http.post<any>(this.getTokenUrl, login_info)
  }
  getPostAuthor(id: number) {
    return this.http.get<any>(this.Url + "users/" + id, this.httpOptions)
  }
}
