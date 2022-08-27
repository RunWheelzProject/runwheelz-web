import { Component } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent  {

  title = 'imageslider';
  imageObject = [{
    image: '../../assets/bike-image3 gif.webp',
    thumbImage: '../../assets/bike-image3 gif.webp',
    title: 'Are you worried about your bike?'
},
 {
    image: '../../assets/bike-image4 gif.webp',
    thumbImage: '../../assets/bike-image4 gif.webp',
    title:'bike washing'},
    {image: '../../assets/bike-image1 gif.gif',
    thumbImage: '../../assets/bike-image1 gif.gif',
    title: 'Are you worried about your bike?'
}, {
    image: '../../assets/home gif3 (tvs motor).gif',
    thumbImage: '../../assets/home gif3 (tvs motor).gif',
    title: 'we care for your bike motor'
  }, 
  {
    image:'../../assets/home gif2.gif' ,
    thumbImage: '../../assets/home gif2.gif',
    title: 'Are you worried about your bike?'
},
 {
    image: '../../assets/home gif4.gif' ,
    thumbImage: '../../assets/home gif4.gif' ,
    title: 'We care for your bike and ride'
},
];
}


