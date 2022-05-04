import { Component, OnInit , Input} from '@angular/core';
import { FaceSnap } from '../modles/face-snap.modle';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  implements OnInit{
  @Input() faceSnap!: FaceSnap;
  btnText!: string;
  ngOnInit() {
    this.btnText = 'Oh Snap!';
  }
  
  onSnap() {
    if (this.btnText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.btnText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.btnText = 'Oh Snap!'
    }
  }
  
}
