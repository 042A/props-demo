import { Component, ViewChild, ElementRef, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DragulaService } from 'ng2-dragula';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Component({
  selector: 'shoppingcart',
  templateUrl: 'shoppingcart.component.html',
  styleUrls: ['dragula.css'],
})

export class ShoppingCart implements OnInit {
    @ViewChild('input')
    input: ElementRef;
    data: any[];

  products: any;

  constructor(af: AngularFire, private dragulaService: DragulaService) {
    this.products = af.database.list('/products');
    dragulaService.setOptions('first-bag', {
      copy: function (el, source) {
        // To copy only elements in left container, the right container can still be sorted
        return source.id === 'left';
      },
      copySortSource: false,
      accepts: function(el, target, source, sibling) {
        // To avoid draggin from right to left container
        return target.id !== 'left';
      }
    })
  }

   ngOnInit(){
      let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
      eventObservable.subscribe();
    }

 }

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
      searchTerm = searchTerm.toUpperCase();
      return products.filter(item => {
        return item.toUpperCase().indexOf(searchTerm) !== -1
      });
  }
}
