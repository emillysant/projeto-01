import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  getPosts() :Observable<Post[]>{
    return this.http.get<Post[]>(this.url)
  }

  addPost(post :Post) :Observable<Post>{
    return this.http.post<Post>(this.url, post)
  }

  getPostById(id :string) :Observable<Post>{
    return this.http.get<Post>(`${this.url}/${id}`)
  }

  deletePost(id :string) :Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  updatePost(post :Post) :Observable<Post>{
    return this.http.put<Post>(`${this.url}/${post.id}`, post)
  }
}
