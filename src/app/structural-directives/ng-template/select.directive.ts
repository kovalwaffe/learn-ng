import { Directive, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DataSource } from './model/data-source';

@Directive({
  selector: '[appSelect]',
  standalone: true
})
export class SelectDirective implements OnInit {
  @Input({required: true}) selectFrom!: DataSource;
  
  private readonly templateRef = inject(TemplateRef)
  private readonly viewContainerRef = inject(ViewContainerRef)

  async ngOnInit() {
    const data = await this.selectFrom.load();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      // Create the embedded view with a context object that contains
      // the data via the key `$implicit`.
      $implicit: data
    });
  }
}
