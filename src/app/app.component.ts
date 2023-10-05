import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-counter';

  inc: any = {value: 0};
  res: any = {value: 0};

  increaseCalled(n:number){
    console.log('INCREASE', n);
    this.inc = {value:n}
  }

  resetCalled(n:number){
    console.log('RESET', n);
    this.res = {value:n};
  }
}
