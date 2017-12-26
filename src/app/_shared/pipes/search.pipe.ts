import { Pipe, PipeTransform } from '@angular/core';

//models 
import { Pet } from './../../models/pet.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pets: Pet[], searchString: string): any {
    if (!pets || !searchString) {
      return pets;
    }
    return pets.filter(item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}
