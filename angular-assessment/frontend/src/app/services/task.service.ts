import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "http://localhost:3000";
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  constructor(private http: HttpClient) { }

  token: any = "";

  getAuthToken(value: any) {
    this.token = value;
  }

  signup(employee: any) {
    return this.http.post(this.baseUrl+"/signup", employee);
  }

  login(user: any) {
     this.http.post(this.baseUrl+"/login", user).subscribe((value: any) => {
      console.log(value);
      console.log(value["token"]);

      this.getAuthToken(value["token"]);

    });
  }


  authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNjgzNjMxNDYwfQ._mnFveZR_INldxRpFo68hPv19rh5JMv4Dc9R2X-7Xbo";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authToken }`
  });
  requestOptions = { headers: this.headers };

  getVideos() {
    console.log(this.requestOptions.headers);

    return this.http.get(this.baseUrl+"/api/videos", this.requestOptions);
  }

  getBookmark(videoId: string) {
    return this.http.get(`${this.baseUrl}/api/videos/bookmarks/${videoId}`, this.requestOptions);
  }

  saveBookmark(videoId: string, timestamp: number) {
    const bookmarkData = { videoId, timestamp };
    return this.http.post(`${this.baseUrl}/api/videos/bookmarks/${videoId}`, bookmarkData, this.requestOptions);
  }
}
