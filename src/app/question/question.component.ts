import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from './shared/question.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question-component.css'],
})
export class QuestionComponent implements OnInit {
  questionForm: FormGroup;
  loader = false;
  error: string;
  userData: Object;

  constructor(private formBuilder: FormBuilder, private question: QuestionService, public snackBar: MdSnackBar) {}

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }

  // Callback from child components 'user'
  userCreation(userData: Object) {
    this.userData = userData;
  }

  submitForm(values): void {
    this.error = '';
    this.loader = true;

    this.question.create(Object.assign(values, this.userData))
        .subscribe(res => {
          this.loader = false;
          this.snackBar.open('Success! Your feedBack was sent !', '', {
            duration: 3000
          });
        }, err => {
          console.error(err);
          this.error = err._body;
          this.loader = false;
        });
  }
}