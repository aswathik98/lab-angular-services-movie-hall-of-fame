import { Component } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviehall';
  image: any = [];
  constructor(private imageservice: ImagesService) { }

  ngOnInit(): void {
  }
  getImage(){
   this.image = this.imageservice.getImage();
   console.log(this.image);
}
}
