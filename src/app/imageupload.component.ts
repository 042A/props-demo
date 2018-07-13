import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { ImageService } from './image.service';

@Component({
  selector: 'imageupload',
  template: `
  <input type="file" id="btnUpload"  (change)="onBtnUploadChange($event)"/>
  <button type="button" (click) = "onBtnBrowseClick($event)">{{btnSelectText}}</button> 
  <img width="200px" [src]="image"> <span (click)='onClick()'>Click me please!</span>  
  `
//   ,
//   styleUrls: ['./o2-upload-to-fbs.component.css']
})



export class UploadComponent implements OnInit {
     
 @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notify.emit('Click from nested component');
    console.log("klick");
  }

    public image: string;

    @Input() fbsBasePath: string;
    @Input() btnSelectText: string;
     targetRef:any;
     storageRef:any;
     constructor(@Inject(FirebaseApp) firebaseApp:any){
        this.storageRef = firebaseApp.storage().ref('/images/');
     }

 

     ngOnInit() {
         if (this.btnSelectText == ''){
           this.btnSelectText = "Select File";
         }
     }

     
     onBtnBrowseClick(event:any){
         let uploadButton = document.getElementById("btnUpload");
         uploadButton.click();
     }

     onBtnUploadChange(event:any){
         let targetFile = event.srcElement.files[0];
         let uploader = document.getElementById("btnUpload");
         let fbsPath = this.fbsBasePath + targetFile.name;
         this.uploadFile(fbsPath,targetFile);

         
     }

     uploadFile(fbsPath:string,targetFile:string) {
       let promise = new Promise((res,rej) => {
          this.targetRef=this.storageRef.child("hey");
          let task=this.targetRef.put(targetFile);
          task.on('state_changed',
            (snapshot:any) => {
              console.log(snapshot.state);
            },
            (error:any) => {
              console.log(error.code);
              rej(error);
            },
            () => {
              let downloadUrl = task.snapshot.downloadURL;
              console.log(downloadUrl);
              res(downloadUrl);
              this.image = downloadUrl;
              let foo = 123;
              this.notify.emit(downloadUrl);
            }
          );
       })

       return promise;
     }
}

