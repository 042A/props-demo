import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { ApiBase }   from './apibase.component';
import { UiBase }      from './uibase.component';
import { CreateSeller }      from './createseller.component';
import { CreateProduct }      from './createproduct.component';
import { UploadComponent }      from './imageupload.component';
import { CreateProposal }      from './create-proposal.component';
import { StepOne }      from './step-one.component';
import { StepTwo }      from './step-two.component';
import { Home }      from './home.component';
import { ApiTemplate }      from './apitemplate.component';
import { ShoppingCart }      from './shoppingcart.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home',  component: Home },
	{ path: 'apibase',  component: ApiBase },
	{ path: 'apitemplate',  component: ApiTemplate },
	{ path: 'uibase', component: UiBase },
	{ path: 'createseller', component: CreateSeller },
	{ path: 'uploadcomponent', component: UploadComponent },
	{ path: 'shoppingcart', component: ShoppingCart },
	{ path: 'createproduct', component: CreateProduct },
	{ path: 'createproposal', component: CreateProposal,
		children: [
	      { path: '', component: StepOne },
	      { path: 'steptwo', component: StepTwo }
	    ]
    }
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
