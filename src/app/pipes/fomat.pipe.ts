import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fomat',
  standalone: true
})
export class FomatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return "$"+value.toUpperCase();
  }

}
