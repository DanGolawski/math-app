import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension'
})
export class ExtensionPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.split('.')[0];
  }

}
