import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { HostContentDirective, HostContext } from './host-content.directive';

@Component({
  selector: 'tmp-host',
  template: `
  <ng-container *ngTemplateOutlet="tmpl; context: context"></ng-container>
  `,
})
export class HostComponent {
  @ViewChild(TemplateRef<HostContentDirective>)
  tmpl: TemplateRef<HostContentDirective>;
  
  context: HostContext = {x: ''}

  @Input()
  set in(value: string){

    this.context.x = value;

  }
}
