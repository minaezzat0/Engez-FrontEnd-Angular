import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private httpOptians = {};



  constructor(private httpClient: HttpClient) {
    this.httpOptians = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'Access-token'
      })
    }
  }
  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.API_BASE_URL}/jobs`);
  }


  getPostByID(PostId: number): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.API_BASE_URL}/jobs/${PostId}`);
  }
  addJob(NewPost: Post , token :string): Observable<Post> {
    return this.httpClient.post<Post>(`${environment.API_BASE_URL}/jobs?access_token=${token}`,
      JSON.stringify(NewPost), this.httpOptians);
  }

  updatePostbyId(NewPost: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${environment.API_BASE_URL}/jobs/${NewPost.id}`, JSON.stringify(NewPost), this.httpOptians)

  }

  deletePostById(PostId: number): Observable<{}> {
    return this.httpClient.delete(`${environment.API_BASE_URL}/jobs/${PostId}`, this.httpOptians)

  }
  getAllPostsByUserID(token: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.API_BASE_URL}/myjobs?access_token=${token}`);
  }
  // getJobsByUserID(userID: number): Observable<Post[]> {
  //   return this.httpClient.get<Post[]>(`${environment.API_BASE_URL}/jobuser/${userID}`);
  // }

}
