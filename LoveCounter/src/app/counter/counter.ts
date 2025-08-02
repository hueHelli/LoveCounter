import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  timer: Array<{ unit: string; value: number }> = [
    { unit: 'Jahre', value: 0 },
    { unit: 'Monate', value: 0 },
    { unit: 'Wochen', value: 0 },
    { unit: 'Tage', value: 0 },
    { unit: 'Stunden', value: 0 },
    { unit: 'Minuten', value: 0 },
    { unit: 'Sekunden', value: 0 },
  ];
  date: Date = new Date(2025, 7, 1, 0, 0, 0); // Set your target date here

  updateTimer(){
    const now = new Date();
    const diff = Math.abs(now.getTime() - this.date.getTime());

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.345); // Approximate month length
    const years = Math.floor(months / 12);

    this.timer[0].value = years;
    this.timer[1].value = months % 12;
    this.timer[2].value = weeks % 4;
    this.timer[3].value = days % 7;
    this.timer[4].value = hours % 24;
    this.timer[5].value = minutes % 60;
    this.timer[6].value = seconds % 60;

    setTimeout(() => this.updateTimer(), 1000);
  }

  ngOnInit() {
    this.updateTimer();
  }
}
