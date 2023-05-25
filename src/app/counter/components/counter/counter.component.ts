import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Counter: {{ counter }}</h1>
    <button (click)="increaseBy(2)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`,
})
export class CounterComponent {
  constructor() {}
  initialValue: number = 10;
  public counter: number = this.initialValue;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter() {
    this.counter = this.initialValue;
  }
}
