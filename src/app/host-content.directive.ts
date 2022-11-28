import { Directive } from '@angular/core';

export class HostContext {
  x: string;
}

@Directive({
  selector: '[tmpHostContent]',
})
export class HostContentDirective {
  static ngTemplateContextGuard(
    dir: HostContentDirective,
    ctx: unknown
  ): ctx is HostContext {
    return true;
  }
}
