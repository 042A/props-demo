import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'createseller',
  templateUrl: 'createseller.component.html',
})


export class CreateSeller {
  items: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
  this.items = af.database.list('/sellers');
  }
  addItem(newName: string, newPhone: string, newMail: string) {
    this.items.push({ name: newName, phone: newPhone, mail: newMail });
  }
  updateItem(key: string, name: string, phone: string, mail: string) {
    this.items.update(key, { name: name, phone: phone, mail: mail });
  }
  deleteItem(key: string) {    
  	console.log(key); 
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
}
  
