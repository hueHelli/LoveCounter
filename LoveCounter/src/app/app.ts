import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Quotes } from './quotes/quotes';
import { Milestones } from './milestones/milestones';

@Component({
  selector: 'app-root',
  imports: [Counter, Quotes, Milestones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LoveCounter');
}
