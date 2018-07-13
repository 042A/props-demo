import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormControl, Validators, FormBuilder, FormGroup  } from "@angular/forms";
import { UploadComponent } from '../app/imageupload.component';
import { ImageService } from './image.service';

@Component({
  selector: 'api3',
  templateUrl: 'api3.component.html',
})
export class Api3 {
    formFeedback: FormGroup;
public imageURL: string = "None";
  selectControl: FormControl = new FormControl("");
    multipleControl: FormControl = new FormControl("", Validators.required);
    multipleData = [];
    selectDisabled = true;


onNotify(message:string):void {
   console.log(message + " go");
   this.imageURL = message; 
   console.log(this.imageURL);
  }


 selection: string = "";
 selection2: string = "";

 onMultiple(data: Array<string>): void {
        this.multipleData = data;
    }

  items: FirebaseListObservable<any>;
    products: FirebaseListObservable<any>;

  constructor(af: AngularFire, fb: FormBuilder) {
    this.items = af.database.list('/brands');
    this.products = af.database.list('/products');
     this.formFeedback = fb.group({
            nameControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            selectControl: [""],
            textControl: ["", Validators.compose([Validators.required, Validators.minLength(10)])]
        });
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText1: string, newText2: string) {
    var keyText = key;
    this.items.update(key, { size: newText2, text: keyText });
  }
  deleteItem(key: string) {    
  	console.log(key); 
    this.items.remove(key); 
  }



  addProduct(
    newProductName: string,  
    newProductId:string, 
    newProductBlock: string,
    newProductBrand: string,
    newProductworthm: string,
    newProductworths: string,
    newProducttitle: string,
    newProductdisc: string,
    newProductDep: string) {
    this.products.push({ 
      name: newProductName,  
      id: newProductId, 
      block: newProductBlock,
      brand: newProductBrand,
      worthm: newProductworthm,
      worths: newProductworths,
      title: newProducttitle,
      disc: newProductdisc,
      dep: newProductDep,
    });
  }
  updateProduct(key: string, newProductName: string, newProductBrand: string) {
    var keyText = key;
    this.products.update(key, { name: newProductName, brand: newProductBrand });
  }
  deleteProduct(key: string) {    
    console.log(key); 
    this.products.remove(key); 
  }



  deleteEverything() {
    this.items.remove();
  }
}

