import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from "angular-gridster2/dist/gridsterConfig.interface";
import { QuestionService } from '../question/shared/question.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  options: GridsterConfig;
  questions: Array<Object>;
  display: Array<Object> = [{"id":1,"usr_id":1,"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros lacus, finibus eget nisl sed, imperdiet porta erat. Fusce sed elit nunc. Nulla efficitur est id dolor pretium vulputate. Vivamus tincidunt, quam mollis cursus dignissim, ipsum magna molestie nisl, sed gravida nibh nulla eu metus. Aliquam scelerisque, nulla sed pretium iaculis, sapien orci commodo tellus, sed dapibus turpis neque ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Sed eros nisi, tincidunt sed neque et, imperdiet porta magna. Vestibulum maximus, est eu volutpat fringilla, sem nunc efficitur enim, sit amet finibus ex tortor sed elit. Fusce aliquet eleifend sapien, id porta enim facilisis in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros lacus, finibus eget nisl sed, imperdiet porta erat. Fusce sed elit nunc. Nulla efficitur est id dolor pretium vulputate. Vivamus tincidunt, quam mollis cursus dignissim, ipsum magna molestie nisl, sed gravida nibh nulla eu metus. Aliquam scelerisque, nulla sed pretium iaculis, sapien orci commodo tellus, sed dapibus turpis neque ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Sed eros nisi, tincidunt sed neque et, imperdiet porta magna. Vestibulum maximus, est eu volutpat fringilla, sem nunc efficitur enim, sit amet finibus ex tortor sed elit. Fusce aliquet eleifend sapien, id porta enim facilisis in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros lacus, finibus eget nisl sed, imperdiet porta erat. Fusce sed elit nunc. Nulla efficitur est id dolor pretium vulputate. Vivamus tincidunt, quam mollis cursus dignissim, ipsum magna molestie nisl, sed gravida nibh nulla eu metus. Aliquam scelerisque, nulla sed pretium iaculis, sapien orci commodo tellus, sed dapibus turpis neque ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Sed eros nisi, tincidunt sed neque et, imperdiet porta magna. Vestibulum maximus, est eu volutpat fringilla, sem nunc efficitur enim, sit amet finibus ex tortor sed elit. Fusce aliquet eleifend sapien, id porta enim facilisis in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros lacus, finibus eget nisl sed, imperdiet porta erat. Fusce sed elit nunc. Nulla efficitur est id dolor pretium vulputate. Vivamus tincidunt, quam mollis cursus dignissim, ipsum magna molestie nisl, sed gravida nibh nulla eu metus. Aliquam scelerisque, nulla sed pretium iaculis, sapien orci commodo tellus, sed dapibus turpis neque ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Sed eros nisi, tincidunt sed neque et, imperdiet porta magna. Vestibulum maximus, est eu volutpat fringilla, sem nunc efficitur enim, sit amet finibus ex tortor sed elit. Fusce aliquet eleifend sapien, id porta enim facilisis in.","updated_at":"2017-03-27 16:57:23","created_at":"2017-03-27 16:57:23"},{"id":2,"usr_id":1,"content":"Nulla et maximus nibh. Donec eleifend finibus mi, a varius dui imperdiet at. Cras commodo felis vitae pellentesque pellentesque. Aenean malesuada sapien vel magna laoreet iaculis. Vestibulum mattis efficitur purus, at faucibus sem ornare nec. Integer fringilla, elit non luctus consequat, ex sapien eleifend est, vitae rutrum ligula nulla at enim. Donec at sodales massa. Praesent vitae lacus mattis, cursus justo eu, venenatis orci. Vestibulum lorem nisl, luctus gravida aliquet et, condimentum ac erat. Proin tincidunt ipsum turpis, ac consequat mi vulputate placerat. Vivamus finibus metus a ligula iaculis, in condimentum neque tempor. Vivamus eget ultrices nunc. Nunc posuere semper lorem non sollicitudin.","updated_at":"2017-03-27 16:58:45","created_at":"2017-03-27 16:58:45"},{"id":3,"usr_id":1,"content":"Maecenas varius massa mauris, eget suscipit mauris commodo id. Phasellus sit amet sapien pharetra, tempus metus ac, vehicula nisi. Proin gravida, dolor eget rhoncus elementum, nisl lacus luctus ligula, at scelerisque leo leo at urna. Duis justo ex, pellentesque sed diam vitae, commodo condimentum lacus. Fusce ut faucibus ante. Donec vitae aliquet neque. Aenean volutpat nisl felis, sit amet commodo leo pharetra nec. Sed dapibus sem libero. Aenean auctor tempor lobortis. Nunc diam risus, posuere sed tellus molestie, posuere accumsan leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n","updated_at":"2017-03-27 16:59:14","created_at":"2017-03-27 16:59:14"},{"id":4,"usr_id":1,"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros lacus, finibus eget nisl sed, imperdiet porta erat. Fusce sed elit nunc. Nulla efficitur est id dolor pretium vulputate. Vivamus tincidunt, quam mollis cursus dignissim, ipsum magna molestie nisl, sed gravida nibh nulla eu metus. Aliquam scelerisque, nulla sed pretium iaculis, sapien orci commodo tellus, sed dapibus turpis neque ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Sed eros nisi, tincidunt sed neque et, imperdiet porta magna. Vestibulum maximus, est eu volutpat fringilla, sem nunc efficitur enim, sit amet finibus ex tortor sed elit. Fusce aliquet eleifend sapien, id porta enim facilisis in.","updated_at":"2017-03-27 16:59:37","created_at":"2017-03-27 16:59:37"},{"id":5,"usr_id":1,"content":"Nulla et maximus nibh. Donec eleifend finibus mi, a varius dui imperdiet at. Cras commodo felis vitae pellentesque pellentesque. Aenean malesuada sapien vel magna laoreet iaculis. Vestibulum mattis efficitur purus, at faucibus sem ornare nec. Integer fringilla, elit non luctus consequat, ex sapien eleifend est, vitae rutrum ligula nulla at enim. Donec at sodales massa. Praesent vitae lacus mattis, cursus justo eu, venenatis orci. Vestibulum lorem nisl, luctus gravida aliquet et, condimentum ac erat. Proin tincidunt ipsum turpis, ac consequat mi vulputate placerat. Vivamus finibus metus a ligula iaculis, in condimentum neque tempor. Vivamus eget ultrices nunc. Nunc posuere semper lorem non sollicitudin.","updated_at":"2017-03-27 16:59:37","created_at":"2017-03-27 16:59:37"},{"id":6,"usr_id":1,"content":"Maecenas varius massa mauris, eget suscipit mauris commodo id. Phasellus sit amet sapien pharetra, tempus metus ac, vehicula nisi. Proin gravida, dolor eget rhoncus elementum, nisl lacus luctus ligula, at scelerisque leo leo at urna. Duis justo ex, pellentesque sed diam vitae, commodo condimentum lacus. Fusce ut faucibus ante. Donec vitae aliquet neque. Aenean volutpat nisl felis, sit amet commodo leo pharetra nec. Sed dapibus sem libero. Aenean auctor tempor lobortis. Nunc diam risus, posuere sed tellus molestie, posuere accumsan leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n","updated_at":"2017-03-27 17:00:34","created_at":"2017-03-27 17:00:34"},{"id":7,"usr_id":1,"content":"Aenean tortor lorem, aliquet sed sagittis eget, auctor ut massa. Pellentesque mollis, nisi vitae mattis maximus, urna nisl malesuada tortor, vitae tempor sem turpis finibus ipsum. Nulla faucibus eros ornare urna hendrerit, vitae semper ante pretium. In sit amet mi vel ipsum condimentum sollicitudin. Mauris ut turpis dignissim, convallis justo vel, pharetra diam. Aliquam auctor, lectus eget laoreet egestas, risus sapien elementum justo, sed ultricies libero nisl eu risus. Morbi nisi ex, tincidunt a tortor in, blandit mollis nisi. Nam pharetra non lacus sed pretium. Integer sit amet sem et lacus malesuada dignissim.","updated_at":"2017-03-27 21:52:57","created_at":"2017-03-27 21:52:57"},{"id":8,"usr_id":1,"content":"Maecenas varius massa mauris, eget suscipit mauris commodo id. Phasellus sit amet sapien pharetra, tempus metus ac, vehicula nisi. Proin gravida, dolor eget rhoncus elementum, nisl lacus luctus ligula, at scelerisque leo leo at urna. Duis justo ex, pellentesque sed diam vitae, commodo condimentum lacus. Fusce ut faucibus ante. Donec vitae aliquet neque. Aenean volutpat nisl felis, sit amet commodo leo pharetra nec. Sed dapibus sem libero. Aenean auctor tempor lobortis. Nunc diam risus, posuere sed tellus molestie, posuere accumsan leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n\n","updated_at":"2017-03-27 21:52:57","created_at":"2017-03-27 21:52:57"},{"id":9,"usr_id":1,"content":"Nulla et maximus nibh. Donec eleifend finibus mi, a varius dui imperdiet at. Cras commodo felis vitae pellentesque pellentesque. Aenean malesuada sapien vel magna laoreet iaculis. Vestibulum mattis efficitur purus, at faucibus sem ornare nec. Integer fringilla, elit non luctus consequat, ex sapien eleifend est, vitae rutrum ligula nulla at enim. Donec at sodales massa. Praesent vitae lacus mattis, cursus justo eu, venenatis orci. Vestibulum lorem nisl, luctus gravida aliquet et, condimentum ac erat. Proin tincidunt ipsum turpis, ac consequat mi vulputate placerat. Vivamus finibus metus a ligula iaculis, in condimentum neque tempor. Vivamus eget ultrices nunc. Nunc posuere semper lorem non sollicitudin.","updated_at":"2017-03-27 21:52:57","created_at":"2017-03-27 21:52:57"},{"id":10,"usr_id":1,"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros lacus, finibus eget nisl sed, imperdiet porta erat. Fusce sed elit nunc. Nulla efficitur est id dolor pretium vulputate. Vivamus tincidunt, quam mollis cursus dignissim, ipsum magna molestie nisl, sed gravida nibh nulla eu metus. Aliquam scelerisque, nulla sed pretium iaculis, sapien orci commodo tellus, sed dapibus turpis neque ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Sed eros nisi, tincidunt sed neque et, imperdiet porta magna. Vestibulum maximus, est eu volutpat fringilla, sem nunc efficitur enim, sit amet finibus ex tortor sed elit. Fusce aliquet eleifend sapien, id porta enim facilisis in.","updated_at":"2017-03-27 21:52:57","created_at":"2017-03-27 21:52:57"}];

  constructor (private question: QuestionService) {
    this.questions = this.display;

    // question.findAll()
    //     .subscribe(
    //         questions => this.questions = display,
    //         err => console.log(err)
    //     );

    // question.create({name: ''})
    //     .subscribe(
    //         res => console.log(res),
    //         err => console.log(err)
    //     );
  }

  ngOnInit() {
    this.options = {
      gridType: 'scrollVertical',
      compactUp: true,
      compactLeft: true,
      itemChangeCallback: this.itemChange.bind(this),
      margin: 13,
      outerMargin: true,
      draggable: {
        enabled: true,
        stop: this.eventStop.bind(this)
      },
      swap: true
    };
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
