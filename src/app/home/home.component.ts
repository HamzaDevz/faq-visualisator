import {Component, ElementRef, OnInit} from '@angular/core';
import { GridsterConfig } from "angular-gridster2/dist/gridsterConfig.interface";
import { QuestionService } from '../question/shared/question.service';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  options: GridsterConfig;
  questions: Array<Object>;
  loader = true;

  constructor (private question: QuestionService, private element: ElementRef) {
    question.findAll(false)
        .subscribe(
            questions => {
              this.questions = _.reverse(questions);
              this.loader = false;
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
      compactUp: true,
      compactLeft: true,
      itemChangeCallback: this.itemChange.bind(this),
      margin: margin,
      maxCols: 3,
      fixedColWidth: colWidth,
      fixedRowHeight: 350,
      outerMargin: true,
      draggable: {
        enabled: true,
        stop: this.eventStop.bind(this)
      },
      swap: true
    };

    this.question.findAll(true)
        .subscribe(
            questions => {
              this.questions = _.reverse(questions);
              this.loader = false;
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
  }

  itemInit(item) {
    console.info('itemInitialized', item);
  }

}
