import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventTableComponent } from './event-table/event-table.component';
import { SportEventFormComponent } from './forms/sport-event-form/sport-event-form.component';
import { MusicEventFormComponent } from './forms/music-event-form/music-event-form.component';
import { EventSignalsService } from './services/event-signals.service';
import { AppEvent } from './interfaces/events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EventTableComponent,
    SportEventFormComponent,
    MusicEventFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  store = new EventSignalsService();

  eventType = 'sport'; 
  editing = signal(false);
  editingId = signal<number | null>(null);
  editCache = signal<Partial<AppEvent>>({});

  current() {
    return this.editing()
      ? this.editCache() as any
      : this.eventType === 'sport'
        ? { title: '', description: '', place: '', participantCount: 1 }
        : { title: '', description: '', place: '', genre: '' };
  }

  typeForForm() {
    return this.editing()
      ? (this.editCache().type ?? 'sport')
      : this.eventType;
  }

  startEdit(e: AppEvent) {
    this.editing.set(true);
    this.editingId.set(e.id);
    this.editCache.set({ ...e });
    this.eventType = e.type;
  }
  saveSport(ev: any) {
    if (this.editing()) {
      this.store.update({ ...(this.editCache() as any), ...ev, id: this.editingId() });
      this.editing.set(false);
    } else {
      this.store.add(ev);
    }
    this.resetForm();
  }

  saveMusic(ev: any) {
    if (this.editing()) {
      this.store.update({ ...(this.editCache() as any), ...ev, id: this.editingId() });
      this.editing.set(false);
    } else {
      this.store.add(ev);
    }
    this.resetForm();
  }
  resetForm() {
    this.editing.set(false);
    this.editingId.set(null);
    this.editCache.set({});
  }
  onDelete(id: number) {
    this.store.remove(id);
    if (this.editing() && id === this.editingId()) {
      this.resetForm();
    }
  }
}