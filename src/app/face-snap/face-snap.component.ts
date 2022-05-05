import { Component, OnInit , Input} from '@angular/core';
import { FaceSnap } from '../modles/face-snap.modle';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  implements OnInit{
  
  constructor(private faceSnapsService: FaceSnapsService) {}

  @Input() faceSnap!: FaceSnap;
  btnText!: string;
  ngOnInit() {
    this.btnText = 'Oh Snap!';
  }
  
  onSnap() {
    if (this.btnText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap' );
      this.btnText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.btnText = 'Oh Snap!'
    }
  }
  
}
