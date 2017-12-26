import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'appMyToUpperCase'
})
export class AppMyToUpperCase implements PipeTransform{
  transform(value: string, exponent: string) {
    return value.toUpperCase();
  }
}
