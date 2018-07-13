import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';



@Component({
  selector: 'steptwo',
  templateUrl: 'step-two.component.html',
})


export class StepTwo {

	constructor(
        private Location: Location) {
        }

   goBack(): void {    
     this.Location.back();
    }

}
