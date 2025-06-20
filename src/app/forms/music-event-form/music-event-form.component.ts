import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseEventFormComponent } from '../base-event-form/base-event-form.component';


@Component({
  selector: 'music-event-form',
  standalone: true,
  imports: [BaseEventFormComponent, CommonModule, FormsModule],
  templateUrl: './music-event-form.component.html',
  styleUrl: './music-event-form.component.scss'
})
export class MusicEventFormComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() place = '';
  @Input() genre = '';
  @Output() newData = new EventEmitter<any>();

  onBaseSubmit(e: {title: string, description: string, place: string }) {
    this.newData.emit({ ...e, genre: this.genre, type: 'music' });
  }
}