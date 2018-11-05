import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fast = interval(1000).pipe(takeWhile((val) => val <= 10));
  slow = interval(2000).pipe(takeWhile((val) => val <= 5));
}
