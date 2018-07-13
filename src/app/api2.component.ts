import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'api2',
  templateUrl: 'api2.component.html',
//  styleUrls: ['test.css'],
})


export class Api2 {

  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;
  
  constructor(af: AngularFire) {
    this.sizeSubject = new Subject();
    this.items = af.database.list('/messages', {
      query: {
        orderByChild: 'size',
        equalTo: this.sizeSubject
      }
    });
  }
  filterBy(size: string) {
    this.sizeSubject.next(size); 
  }

}
