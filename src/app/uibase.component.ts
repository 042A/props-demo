import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'uibase',
  templateUrl: 'uibase.component.html',
})


export class UiBase {
   	
   	percent: number = 50;
   	    indicatingPercent: number = 50;


    isClicked: string = "You should click on button!";

    clickMe(event: Event) {

        event.srcElement.classList.add("loading");

        setTimeout(() => {
            event.srcElement.classList.remove("loading");
            this.isClicked = "Excellent, it works!";
        }, 2000);
    }

    form: FormGroup;
    formFeedback: FormGroup;
    formSubmited: boolean = false;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            agreeControl: ["", Validators.required],
            emailControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            nameControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
        });

        this.formFeedback = fb.group({
            nameControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            selectControl: [""],
            textControl: ["", Validators.compose([Validators.required, Validators.minLength(10)])]
        });
    }

    submit() {
	    this.formSubmited = true;
    }

}
