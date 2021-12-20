import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log('giri')
   }
  qrResult : string;
  deviceCurrent: any;
   cameras:any;

  onCodeResult = (result:string) => {
    this.qrResult = result
    console.log(result)
    window.open(result)
  }

  onCamerasFound(result:any) {
    console.log(result)
    this.cameras = result;
    this.deviceCurrent = result[0]
  }

  click1(){
    this.deviceCurrent = this.cameras[0]
  }

  click2(){
    this.deviceCurrent = this.cameras[1]
  }


}
