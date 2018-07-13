import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormControl, Validators, FormBuilder, FormGroup  } from "@angular/forms";
import { UploadComponent } from '../app/imageupload.component';
import { ImageService } from './image.service';
import {Ng2DragDropModule} from "ng2-drag-drop";
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'apitemplate',
  templateUrl: 'apitemplate.component.html',
  styleUrls: ['dragula.css'],

})
export class ApiTemplate {
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
 cities: Array<string> = ["New York", "Belgrade", "Stockholm", "Sarajevo"];
 onMultiple(data: Array<string>): void {
        this.multipleData = data;
    }

  items: FirebaseListObservable<any>;
    products: FirebaseListObservable<any>;

  constructor(af: AngularFire, fb: FormBuilder, private dragulaService: DragulaService) {
    this.items = af.database.list('/brands');
    this.products = af.database.list('/products');
     this.formFeedback = fb.group({
            nameControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            selectControl: [""],
            textControl: ["", Validators.compose([Validators.required, Validators.minLength(10)])]
        });

     dragulaService.setOptions('first-bag', {
  
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



  addProduct(newProductName: string, newProductBrand) {
    this.products.push({ name: newProductName, brand: newProductBrand, image: this.imageURL  });
  }
  updateProduct(key: string, newProductName: string, newProductBrand: string) {
    var keyText = key;
    this.products.update(key, { name: newProductName, brand: newProductBrand, image: this.imageURL });
  }
  deleteProduct(key: string) {    
    console.log(key); 
    this.products.remove(key); 
  }



  deleteEverything() {
    this.items.remove();
  }


 public groups: Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'},{name: 'Item B'},{name: 'Item C'},{name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'},{name: 'Item 2'},{name: 'Item 3'},{name: 'Item 4'}]
    }
  ];
}

