import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Quotes } from './quotes/quotes';

@Component({
  selector: 'app-root',
  imports: [Counter, Quotes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LoveCounter');
}
