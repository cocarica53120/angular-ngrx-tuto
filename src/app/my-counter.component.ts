import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: Number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(this.increment());
  }

  decrement() {
    this.store.dispatch(this.decrement());
  }

  reset() {
    this.store.dispatch(this.reset());
  }
}
