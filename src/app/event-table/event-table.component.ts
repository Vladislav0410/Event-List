import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEvent } from '../interfaces/events';


@Component({
  selector: 'event-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-table.component.html',
  styleUrl: './event-table.component.scss'
})
export class EventTableComponent{
  @Input() events: AppEvent[] = [];
  @Output() edit = new EventEmitter<AppEvent>();
  @Output() remove = new EventEmitter<number>();
  
}