import {Component, ElementRef, OnInit} from '@angular/core';
import { GridsterConfig } from "angular-gridster2/dist/gridsterConfig.interface";
import { QuestionService } from '../question/shared/question.service';
import { UserService } from '../user/shared/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  options: GridsterConfig;
  questions: Array<Object>;
  users: Array<Object>;
  difference: Array<any>;
  loader = true;
  currentUser: any;
  storage = localStorage;
  colors = ['grey', 'red', 'purple', 'blue', 'green', 'yellow', 'orange'];

  constructor (private question: QuestionService, private user: UserService, private element: ElementRef) {
    question.findAll(false)
        .subscribe(
            questions => {
              user.findAll().subscribe(users => {
                this.users = users;

                _.forEach(questions, question => {
                  this.currentUser = _.find(this.users, (user) => user['id'] === parseInt(question.usr_id));
                  question.name = this.currentUser.name;
                  question.surname = this.currentUser.surname;
                  question.color = this.getColorStorage(question);
                  question.initCallback = this.itemInit.bind(this);
                });

                this.questions = _.reverse(questions);
                this.loader = false;
              });
            },
            err => {
              console.log(err);
              this.loader = false;
            }
        );

  }

  ngOnInit() {
    let margin: number = 13;
    let container: number = this.element.nativeElement.offsetWidth;
    let colWidth: number = (container - margin) / 3;

    this.options = {
      gridType: 'fixed',
      compactUp: false,
      compactLeft: false,
      itemChangeCallback: this.itemChange.bind(this),
      margin: margin,
      maxCols: 3,
      fixedColWidth: colWidth,
      fixedRowHeight: 325,
      outerMargin: true,
      draggable: {
        enabled: true,
        stop: this.eventStop.bind(this)
      },
      swap: false
    };

    this.question.findAll(true)
      .subscribe(
        questions => {
          this.user.findAll().subscribe(users => {
            this.users = users;

            _.forEach(questions, question => {
              this.currentUser = _.find(this.users, (user) => user['id'] === parseInt(question.usr_id));
              question.name = this.currentUser.name;
              question.surname = this.currentUser.surname;
              question.color = this.getColorStorage(question);
              question.initCallback = this.itemInit.bind(this);
            });

            this.difference = _.differenceWith(questions, this.questions, (v1, v2) => v1.id === v2.id);

            console.log('difference', this.difference);

            if (this.difference.length > 0) {
              _.forEach(this.difference, v => this.questions.unshift(v));
            }

            console.log('question', this.questions);

            this.loader = false;
          });
        },
        err => {
          console.log(err);
          this.loader = false;
        }
      );
  }

  eventStop(item, scope) {
    console.info('eventStop', item, scope);
  }

  itemChange(item, scope) {
    console.info('itemChanged', item, scope);
    _.forEach(scope.gridster.state.grid, v => this.storage.setItem(`question_${v['id']}`, JSON.stringify({color: v.color, x: v['x'], y: v['y'], cols: v['cols'], rows: v['rows']})));
  }

  itemInit(item) {
    let getCoordStorage = this.storage.getItem(`question_${item.id}`);
    let currentCoord = {color: item.color, x: item.x, y: item.y, cols: item.cols, rows: item.rows};

    if (!_.isEmpty(getCoordStorage)) {
      _.merge(item, JSON.parse(getCoordStorage));
    } else {
      // TODO Set by storage on top !
      this.storage.setItem(`question_${item.id}`, JSON.stringify(currentCoord));
    }

    console.info('itemInitialized', item);
  }

  getColorStorage(item) {
    let storageData = this.storage.getItem(`question_${item.id}`);
    let defaultColor = this.colors[0];

    if (storageData) {
      let dataParsed = JSON.parse(storageData);
      return (dataParsed.color) ? dataParsed.color : defaultColor;
    }

    return defaultColor;
  }

  changeColor(item) {
    let getStorage = this.storage.getItem(`question_${item.id}`);
    let storageParsed = JSON.parse(getStorage);
    let myIndex = _.indexOf(this.colors, item.color);

    myIndex = (myIndex === -1) ? 0 : myIndex+1;

    item.color = this.colors[myIndex];

    // Store color
    storageParsed.color = item.color;
    this.storage.setItem(`question_${item.id}`, JSON.stringify(storageParsed));
  }
}
