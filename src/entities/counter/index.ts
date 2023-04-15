import { action, computed, makeObservable, observable } from "mobx";

class Counter {
  private _count = 0;
  constructor() {
    makeObservable<Counter, "_count">(this, {
      _count: observable,
      increment: action,
      decrement: action,
      total: computed,
    });

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this._count = this._count + 1;
  }

  decrement() {
    this._count = this._count - 1;
  }

  get total() {
    return this._count;
  }
}

export const counter = new Counter();
