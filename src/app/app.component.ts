import { Component } from '@angular/core';
import { ImageIdList } from './image-id-list';

import { shuffleArray } from './util/shuffle-array';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageIdList = ImageIdList;

  viewPortItems: number[];

  ngOnInit() {
    Array.from(new Array(5)).forEach(() => {
      this.imageIdList = this.imageIdList.concat(
        shuffleArray(this.imageIdList)
      );
      console.log(this.imageIdList.length);
    });

  }

}
