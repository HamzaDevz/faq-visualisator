import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  url : string;

  constructor(private http: Http) {
    this.url = 'http://hamzatei.fr/projets/lumen-rest-api/public/';
  }

  findAll() {
    return this.get(`users`);
  }

  findById(id: number) {
    return this.get(`users/${id}`);
  }

  create(data: Object) {
    return this.http.post(this.url + `users`, data)
        .map((res) => res.json());
  }

  private get(path: string) {
    return this.http.get(this.url + path)
      .map((res) => res.json());
  }
}
