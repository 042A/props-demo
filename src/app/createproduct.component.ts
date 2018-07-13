import { Component, ViewChild } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UploadComponent } from '../app/imageupload.component';
import { ImageService } from './image.service';


@Component({
  selector: 'createproduct',
  templateUrl: 'createproduct.component.html',
})


export class CreateProduct {

  public imageURL: string = "None";
  items: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
  this.items = af.database.list('/products');
  }

  onNotify(message:string):void {
   console.log(message + " go");
   this.imageURL = message; 
   console.log(this.imageURL);
  }

  addItem(newName: string, newPhone: string, newMail: string) {
    this.items.push({ name: newName, phone: newPhone, mail: newMail, image: this.imageURL});
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
  
