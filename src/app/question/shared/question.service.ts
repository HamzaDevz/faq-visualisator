import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {
  url : string;

  constructor(private http: Http) {
    this.url = 'http://localhost:8888/';
  }

  findAll() {
    return this.get(`questions`);
  }

  findById(id: number) {
    return this.get(`questions/${id}`);
  }

  create(data: Object) {
    return this.http.post(this.url + `questions`, data)
        .map((res) => res.json());
  }

  private get(path: string) {
    return this.http.get(this.url + path)
      .map((res) => res.json());
  }
}
