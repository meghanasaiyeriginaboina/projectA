import { Component } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
 banner:Banner[]=[];
  constructor(private service:BannerService){}
  ngOnInit(){ 
    this.service.getdata().subscribe(data=>this.banner=data);

  }
}
