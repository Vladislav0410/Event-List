The task is estimated to take up to 4 hours of work for a mid-level developer.

You are required to develop a small event management application. The task should demonstrate your knowledge of working with Angular components, using Angular Signals, and approaches to component architecture—either through inheritance or structural composition.
Inheritance can be replaced with structural composition (e.g., a shared form component + ng-container).
No backend implementation is needed—data can be stored in memory.
All components must be standalone.
For styling and UI convenience, the use of PrimeNG is allowed.

Requirements:
Develop a small application for managing a list of events. The user should be able to:

View the list of events.

Add new events.

Edit existing events.

Delete events.

Detailed Specifications:
Event List:
○ Each event contains: name, description, location, and event type.
○ The event list should be displayed in a table format.

Adding/Editing Events:
○ A form for adding and editing events.
○ Use component inheritance:

The base form component (BaseEventFormComponent) should contain common fields: name, description, and location.

Create two derived components:

SportEventFormComponent: Adds a "Number of Participants" field.

MusicEventFormComponent: Adds a "Music Genre" field.

Deleting Events:
○ The user should be able to delete events from the list.

Component Inheritance:
○ Create a base component BaseEventFormComponent implementing common form logic.
○ Create two derived components: SportEventFormComponent and MusicEventFormComponent, which add their respective fields.

Signals:
○ Use Angular Signals to manage the application state (e.g., storing and updating the event list).

Standalone Components:
○ All components must be standalone
