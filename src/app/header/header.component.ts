import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener  } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host : {'class': 'viewport'}
})
export class HeaderComponent implements OnInit, AfterViewInit  {
  @ViewChild("cxmheader", {static: false}) cxmheaderView: ElementRef;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.myFunction()
   
  } 
  sticky: number = 0;
  ngAfterViewInit(){

    console.log(this.cxmheaderView);
    var hamburger1 = this.cxmheaderView.nativeElement.children[1].children[0];
    if(this.currentRouteName === '/home') {
      hamburger1.style.color = 'white';
     } else {
      hamburger1.style.color = 'black';
     }

  }
  constructor(private router: Router) { }
  currentRouteName : string = "";
  ngOnInit() {
    this.currentRouteName = this.router.url;
    console.log(this.currentRouteName);
   
  }

  // window.onscroll = () => {
  //   this.myFunction()
  // };


 

myFunction()  {
  this.sticky = this.cxmheaderView.nativeElement.offsetTop;
    var childheader = this.cxmheaderView.nativeElement.children[2].children[0].children;
   var hamburger = this.cxmheaderView.nativeElement.children[1].children[0];
   hamburger.style.color = 'black';
  if (window.pageYOffset > this.sticky) {
    //   var chilheader = header.children;
    //   console.log(chilheader[0].children)[0].children;
   
     for(var i=0;i<childheader.length;i++){
        var subchild = childheader[i].children[0];
        if(subchild.tagName === "A") {
            subchild.style.color = 'black';
          }
     }
    
     
     this.cxmheaderView.nativeElement.classList.add("stickyheader");
  } else {
    for(var i=0;i<childheader.length;i++){
        var subchild = childheader[i].children[0];
        if(subchild.tagName === "A") {
            subchild.style.color = 'white';
          }
     }
     if(this.currentRouteName === '/home') {
      hamburger.style.color = 'white';
     } 
     this.cxmheaderView.nativeElement.classList.remove("stickyheader");
  }
}

}
