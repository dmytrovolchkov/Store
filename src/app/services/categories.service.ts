import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  category = [
    'Scenery',
    'Portrait',
    'Still life',
    'Cubism',
    'Seascape'
  ];

  Category$(): any {
    return of (this.category);
  }
}
