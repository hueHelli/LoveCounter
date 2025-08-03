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

  updateTimer() {
    const now = new Date();
    const start = new Date(this.date); // das Ursprungsdatum

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    // Korrekturen rückwärts rechnen, falls negative Werte
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate(); // Tage des vorherigen Monats
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    // Wochen berechnen aus Tagen
    const weeks = Math.floor(days / 7);
    days = days % 7;

    this.timer[0].value = years;
    this.timer[1].value = months;
    this.timer[2].value = weeks;
    this.timer[3].value = days;
    this.timer[4].value = hours;
    this.timer[5].value = minutes;
    this.timer[6].value = seconds;

    setTimeout(() => this.updateTimer(), 1000);
  }

  ngOnInit() {
    this.updateTimer();
  }
}
