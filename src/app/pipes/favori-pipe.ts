import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favori'
  
})
export class FavoriPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Oui' : 'Non';
  }

}
