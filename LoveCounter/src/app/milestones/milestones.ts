import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-milestones',
  imports: [CommonModule],
  templateUrl: './milestones.html',
  styleUrl: './milestones.css',
})
export class Milestones {
  milestones: Array<{
    date: Date;
    description: string;
    achieved: boolean;
    remainingDays: number;
  }> = [
    {
      date: new Date(2025, 8, 1),
      description: '1 Month',
      achieved: false,
      remainingDays: 0,
    },
    {
      date: new Date(2025, 9, 1),
      description: '2 Months',
      achieved: false,
      remainingDays: 0,
    },
    {
      date: new Date(2025, 10, 9),
      description: '100 Days',
      achieved: false,
      remainingDays: 0,
    },
    {
      date: new Date(2026, 1, 1),
      description: '6 Months',
      achieved: false,
      remainingDays: 0,
    },
    {
      date: new Date(2026, 7, 1),
      description: '1 year',
      achieved: false,
      remainingDays: 0,
    },
    {
      date: new Date(2027, 7, 1),
      description: '2 years',
      achieved: false,
      remainingDays: 0,
    },
    {
      date: new Date(2028, 7, 1),
      description: '3 years',
      achieved: false,
      remainingDays: 0,
    },
    {
      date: new Date(2029, 7, 1),
      description: '4 years',
      achieved: false,
      remainingDays: 0,
    },
  ];

  checkMilestones() {
    const now = new Date();
    this.milestones.forEach((milestone) => {
      if (now >= milestone.date) {
        milestone.achieved = true;
      }
    });
  }

  setRemainingDays() {
    const now = new Date();
    this.milestones.forEach((milestone) => {
      if (!milestone.achieved) {
        const timeDiff = milestone.date.getTime() - now.getTime();
        milestone.remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      } else {
        milestone.remainingDays = 0;
      }
    });
  }

  ngOnInit() {
    this.checkMilestones();
    this.setRemainingDays();
  }
}
