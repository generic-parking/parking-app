import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';

@Pipe({
  name: 'celMask'
})
export class CelMaskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    const conformedMask = conformToMask(
      value,
      mask,
      { guide: false }
    );
    return conformedMask.conformedValue;
  }

}
