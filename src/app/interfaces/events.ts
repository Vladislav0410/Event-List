export type EventType = 'sport' | 'music';

export interface BaseEvent {
  id: number;
  title: string;
  description: string;
  place: string;
  type: EventType;
}

export interface SportEvent extends BaseEvent {
  type: 'sport';
  participantCount: number;
}

export interface MusicEvent extends BaseEvent {
  type: 'music';
  genre: string;
}

export type EventInput = Omit<SportEvent, 'id'> | Omit<MusicEvent, 'id'>;

export type AppEvent = SportEvent | MusicEvent;