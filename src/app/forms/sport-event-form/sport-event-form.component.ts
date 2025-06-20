import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseEventFormComponent } from '../base-event-form/base-event-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sport-event-form',
  standalone: true,
  imports: [BaseEventFormComponent, CommonModule, FormsModule],
  templateUrl: './sport-event-form.component.html',
  styleUrl: './sport-event-form.component.scss'
})
export class SportEventFormComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() place = '';
  @Input() participantCount = 1;
  @Output() newData = new EventEmitter<any>();

  onBaseSubmit(e: {title: string, description: string, place: string }) {
    this.newData.emit({ ...e, participantCount: this.participantCount, type: 'sport' });
  }
}