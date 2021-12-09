import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment(): any {
    this.store.dispatch(this.increment());
  }

  decrement(): any {
    this.store.dispatch(this.decrement());
  }

  reset(): any {
    this.store.dispatch(this.reset());
  }
}
