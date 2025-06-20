import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'base-event-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './base-event-form.component.html',
  styleUrl: './base-event-form.component.scss'
})
export class BaseEventFormComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() place = '';
  @Output() baseSubmit = new EventEmitter<{title: string, description: string, place: string}>();

  submit() {
    this.baseSubmit.emit({
      title: this.title,
      description: this.description,
      place: this.place
    });
  }
}