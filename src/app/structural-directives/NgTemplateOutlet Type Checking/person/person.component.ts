import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './person.component.html'
})
export class PersonComponent {
  @Input() person!: Person;
  @ContentChild('#personRef', {read: TemplateRef})
  personTemplateRef?: TemplateRef<unknown>;
}
