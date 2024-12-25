import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFilter',
  standalone: true
})
export class StringFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof(value)=='string'){
      return value
    }else{
      return " is a non string value "
    }
  }

}
