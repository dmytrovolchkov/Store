import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(str: string): string {
    const num = str
      .split(' ').join('')
      .split('+').join('')
      .split('(').join('')
      .split(')').join('');
    if (num.length === 9 || num.length === 10 || num.length === 11 || num.length === 12) {
      return `+380 (${num.slice(num.length - 9, num.length - 7)}) ${
        num.slice(num.length - 7, num.length - 4)}-${
        num.slice(num.length - 4, num.length - 2)}-${
        num.slice(num.length - 2, num.length)}`;
    } else { return `Wrong format`; }
  }

}
