import {Component, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';
import { UserService } from './shared/user.service';
import { User } from './user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { EventEmitter } from "@angular/forms/src/facade/async";

@Component({
  selector: 'user-form',
  templateUrl: './user.component.html',
  styleUrls: ['./user-component.css']
})

export class UserComponent implements OnInit {
  model = User;
  contactForm: FormGroup;
  submitted = !!this.cookie.getObject('CurrentUser');
  error = '';
  loader = false;
  @Output() userCreation = new EventEmitter<Object>();

  constructor(private formBuilder: FormBuilder, private user: UserService, private cookie: CookieService) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]]
    });

    if (this.submitted) {
      let user: Object = this.cookie.getObject('CurrentUser');
      this.userCreation.emit(this.formatUser(user));
    }
  }

  submitForm(values): void {
    this.error = '';
    this.loader = true;

    this.user.create(values)
      .subscribe(res => {
        this.loader = false;

        // Create cookie
        this.cookie.putObject('CurrentUser', res);

        this.userCreation.emit(this.formatUser(res));

        // Form can go now
        this.submitted = true;
      }, err => {
        console.error(err);
        this.error = err.statusText;
        this.loader = false;
      });
  }

  private formatUser(user): Object {
    return new User(user.id, user.name, user.surname, user.email);
  }
}
