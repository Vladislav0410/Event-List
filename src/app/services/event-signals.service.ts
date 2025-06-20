import { Injectable, signal } from '@angular/core';
import { AppEvent, EventInput } from '../interfaces/events';

@Injectable({ providedIn: 'root' })
export class EventSignalsService {
  private id = 1;
  events = signal<AppEvent[]>([]);

  add(event: EventInput) {
    this.events.update(arr => [...arr, { ...event, id: this.id++ }]);
  }

  update(event: AppEvent) {
    this.events.update(arr => arr.map(e => e.id === event.id ? event : e));
  }
  remove(id: number) {
    this.events.update(arr => arr.filter(e => e.id !== id));
  }
  getById(id: number) {
    return this.events().find(e => e.id === id);
  }
}