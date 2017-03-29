import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class QuestionService {
  url : string;

  constructor(private http: Http) {
    this.url = 'http://hamzatei.fr/projets/lumen-rest-api/public/';
  }

  findAll(withInterval: boolean) {
    if (withInterval) {
      return Observable.interval(15000)
          .mergeMap(() => this.get(`questions`));
    }

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
