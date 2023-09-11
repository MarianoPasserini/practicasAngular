import { Component } from '@angular/core';

interface PCComponent {
  name: string;
  option1: string;
  option2: string;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public pcComponents: PCComponent[] = [
    { name: 'CPU', option1: 'Intel', option2: 'AMD' },
    { name: 'GPU', option1: 'Nvidia', option2: 'RADEON' },
    { name: 'RAM', option1: 'DDR3', option2: 'DDR4' },
    { name: 'HDD', option1: 'HDD', option2: 'SSD' },
    { name: 'Motherboard', option1: 'ATX', option2: 'Micro ATX' },
    { name: 'Power Supply', option1: 'CERTIFIED', option2: 'NOT CERTIFIED' }
  ];

  public counters: number[] = Array(this.pcComponents.length).fill(0);
  public selectedOptions: string[] = Array(this.pcComponents.length).fill('');

  public shoppingCart: { name: string; quantity: number; }[] = [];

  public changeStatus(index: number, value: number) {
    this.counters[index] += value;
  }

  public buttonBehavior(i: number, option: string) {
    const componentName = this.pcComponents[i].name;
    const previousOption = this.selectedOptions[i];

    this.selectedOptions[i] = option;

    if (previousOption !== option) {
      console.log(`The selected option in position ${i} for ${componentName} changed from ${previousOption} to ${option}`);
    }
  }

  constructor() {}
}
