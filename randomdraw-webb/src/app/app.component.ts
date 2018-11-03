import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = new FormControl('bbonjor');
  randomList: String[] = ['Romain'];
  choice: String;

  addList(): void {
    this.randomList.push(this.name.value);
    console.log(this.randomList);
  }

  sort(): void {
    // return this.randomList[1];
    this.choice = this.randomList[this.randomNumber(0, this.randomList.length - 1)];
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
