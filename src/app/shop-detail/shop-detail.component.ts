import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent {
  store: any = {};
  constructor() {
    this.store = {
      name: 'Antique Plaza',
      address: [
        '114 West Main Street, Mesa, 85201'
      ],
      map: {
        lat: 33.415433,
        lng: -111.834773
      },
      tags: [
        'Mall',
      ],
      description: 'The oldest antique mall in Mesa, the Antique Plaza has spent the last twenty years servicing\
       the Valley with a truly unique selection of items.</br>Over the years we’ve collected more than 150 dealers\
        and a robust, knowledgeable staff. We have jewelry aficionados, paper addicts, collectible connoisseurs,\
         art savants, furniture fanatics and clothing experts.</br>It’s their ‘love for the goods’ and friendly\
          service that keep people coming back for more.</br>Antique Plaza has been praised in the press, and was\
           voted ‘Best of the East Valley’ from the East Valley Tribune in 2010 and ‘The best place to buy a mod divan\
            on the cheap’ from the Phoenix New Times in 2006.<br/><br/>Open 362 days out of the year, it is the perfect\
             place to spend the afternoon reminiscing, or at 4 p.m. on Christmas Eve, it’s the perfect place to frantically\
              check off everyone on your long shopping list. Antique Plaza is also surrounded by museums, quaint shops and\
               local restaurants in Mesa’s historic Downtown, so we have to warn you that you may never want to leave\
               <br/><br/>Antique Plaza’s owner, Greg Farr, has dedicated his life to running a top-notch antique business.\
                He’s a unique individual who isn’t happy until the customer is. Everyone who’s met Greg is sure to know some\
                 of his signature corny-beyond-belief phrases or has tasted some of his home-cooked popcorn. Greg specializes\
                  in mid-century furniture, and whatever he doesn’t stash in his living room (he used to have 10 chairs\
                   sprawled about and no couch) he brings into the shop to sell for a great price.<br/><br/>At the Antique\
                    Plaza we stray away from stuffy (we may be a little dusty, but never stuffy!) to bring you great items\
                     for even better prices. You might not always find what you’re looking for, but you’re sure to find something better.',
      hero: './assets/store-images/AP/hero.jpg',
      pics: [
        './assets/store-images/AP/1.jpg',
        './assets/store-images/AP/2.jpg',
        './assets/store-images/AP/3.jpg',
        './assets/store-images/T4U/4.jpg',
        './assets/store-images/T4U/5.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/AntiquePlazaMesa/',
        instagram: 'https://www.instagram.com/antiqueplaza/'
      },
      contact: {
        site: 'antiqueplazamesa.com',
        phone: '480-833-4844',
        email: 'antiqueplaza@gmail.com'
      },
      region: 'east'
    };
  }
}
