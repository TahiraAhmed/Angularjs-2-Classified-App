import { Component, OnInit } from '@angular/core';

//import { car2 } from './car2';
//import { Ads, Car, Dress } from './ad';





@Component({
//  moduleId: module.id,
  selector: 'classified-app',
  templateUrl: './classified.component.html',
  styleUrls: ['./classified.component.css']
})
export class ClassifiedComponent implements OnInit {

  submitted = false;

  onSubmit() { this.submitted = true; }

  // get diagnostic() { return JSON.stringify(this.model); }

   categories = ['Car', 'Dress','Mobile', 'Real Estate'];
   ad = new Ads(this.categories[0],'Corolla',2200000,'black');


   ads = JSON.parse(sessionStorage.getItem("list")) || //['Corolla', 'Red Dress', 'QMobile', 'Samsung'];
          [ new Dress("Dress","Used dress", 1800, "green & red","T-shirt.png"), new Car("Car","Corolla", 62000, "black","car2.png"), new Dress("Dress","Used dress", 2000, "blue","dress.png") ];
   
  add(imageUrl: string, category:string, title: string,price:number, color: string ) {
 //   console.log(`Adding image:${imageUrl} `);
     alert("Ad form submitted successfully!");
      /*  var myVar = setInterval(myTimer, 1000);

         function myTimer() {
           var d = new Date();
           var currSecs = d.getSeconds()
             document.getElementById("demo").innerHTML = currSecs.toString();
      }*/
            this.ads.push({category,title,price,color,imageUrl});
            sessionStorage.setItem('list', JSON.stringify(this.ads));


  }  

  
  delete(index: number){
    
    this.ads.splice(index, 1);
    sessionStorage.setItem("list", JSON.stringify(this.ads));
    

}
   edit(index: number){
   
    var a = this.ads[index].category;  
    var b = this.ads[index].title;
    var c = this.ads[index].price;
    var d = this.ads[index].color;  
    this.ads.splice(index, 1);
    (<HTMLInputElement>document.getElementById("category")).value = a;
    (<HTMLInputElement>document.getElementById("title")).value = b;
    (<HTMLInputElement>document.getElementById("price")).value = c;
    (<HTMLInputElement>document.getElementById("color")).value = d;
    sessionStorage.setItem("list", JSON.stringify(this.ads));

     if (a == "Car" || b == "Corolla" || c == 2200000 || d == "black") {
       document.getElementById("submitBtn").disabled = true;
   }

}

active = true;

  newAd() {
  this.ad = new Ads(this.categories[0],'',this.ads.placeholder,'');
  this.active = false;
  setTimeout(() => this.active = true, 0);

  }


  constructor() { }

  ngOnInit() {
  }

}

 class Ads {
 
  constructor(
    public category: string,
    public title: string,
    public price: number,
    public color: string) {
    
   }
}
 class Car extends Ads{
    
    imageUrl: string;
  
    constructor(category: string, title: string, price: number, color: string, imageUrl: string){
        super(category,title,price,color);
        this.imageUrl = imageUrl;
    }

}

 class Dress extends Ads{
    
    imageUrl: string;
   
    constructor(category: string, title: string, price: number, color: string, imageUrl: string){
        super(category,title,price,color);
        this.imageUrl = imageUrl;
    }
}

