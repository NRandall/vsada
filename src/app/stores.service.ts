import { Injectable } from '@angular/core';

@Injectable()
export class StoresService {
  stores: Array<any>;
  store: any;
  query: string;

  getStores() {
    return this.stores;
  };

  setStore(passedStore: any) {
    this.store = passedStore;
  }

  getStore() {
    return this.store;
  }

  setQuery(query: string) {
    this.query = query;
  }

  getQuery() {
    return this.query;
  }

  constructor() {

  this.stores = [
    // {
    //   name: 'PAST Vintage',
    //   address: ['120 W. Main, Mesa, 85201'],
    //   map: {lat: 33.415203, lng: -111.834871},
    //   tags: [
    //     'Mid-Century Modern',
    //     'Furniture',
    //     'Retro',
    //     'Danish'
    //   ],
    //   description: 'Who says you can’t live in the past? Meet PAST: the brainchild of four co-owners who merged their\
    //    backgrounds in graphic design, photography, journalism and business management to create the vintage furniture\
    //     and home decor shop they always dreamed of. Our aim is to not only show you how to incorporate vintage styles\
    //      into your home, but also make it affordable to do so. Our team’s relentless quest to find the finest pieces\
    //       from the past ensures you’ll have the most beautiful present.',
    //   hero: 'http://24rcle3xxiqq3u6gz62gczyh.wpengine.netdna-cdn.com/wp-content/uploads/past-vinta.jpg',
    //   pics: [
    //     'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11953144_1652765258271494_7433514891133886577_n\
    //     .jpg?oh=63885ec909ccab6c2ee4b498d0aa7a96&oe=583BDE54',
    //     'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/13962525_1755467308001288_2028628013531203059_n\
    //     .jpg?oh=1f3d2f407bc9e5f6313d6a3351dbc55b&oe=5878C1E9',
    //     'https://scontent.fphx1-2.fna.fbcdn.net/t31.0-8/12138474_1662118714002815_4936162802093071243_o.jpg',
    //     'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11041191_1647655358782484_7884207339641999001_n\
    //     .jpg?oh=eff365fda8c5f84a78e06cf3c59d630d&oe=587FBD6C'
    //   ],
    //   social: {
    //     instagram: 'http://instagram.com/pastvintage',
    //     facebook: 'http://facebook.com/pastvintageshop'
    //   },
    //   contact: {
    //     email: 'pastvintage@gmail.com'
    //   },
    //   region: 'east'
    // },
//////////////////////////////////////////////////////
    {
      name: 'ANTIQUES ON CAMELBACK, L.L.C.',
      address: [
        '3601 <small>E. Indian School Rd</small>, Phoenix, 85018',
        '835 E. Camelback Rd, Phoenix, 85014',
        '2020 N. Scottsdale Rd, Scottsdale, 85257'
      ],
      map: {lat: 33.494714, lng: -112.003802},
      tags: [
      ],
      description: 'Longtime dealer and mall owner Stace Robbins has been in the antiques field since settling in\
       Phoenix in 1994, and has served as a VSADA officer for the past ten years. <br />Contact us for assistance in\
        decorating your home, business, and garden.  Incorporate your own special heirlooms in addition to selecting\
         from our inventory and those items we locate for you.  We also help with set dressing for film and theater.\
          <br/>Estate dispersal consultations, sales, and buy-outs. Your concierge for all things vintage!',
      hero: './assets/store-images/AOC/hero.jpg',
      pics: [
        './assets/store-images/AOC/1.jpg',
        './assets/store-images/AOC/2.jpg',
        './assets/store-images/AOC/3.jpg',
        './assets/store-images/AOC/4.jpg',
        './assets/store-images/AOC/5.jpg',
      ],
      social: {

      },
      contact: {
        email: 'stace@staceplace.com'
      },
      region: 'central'
    },
//////////////////////////////////////////////////////
    {
      name: 'Main Street Antique Mall',
      address: [
        '7260 E Main Street, Mesa, 85207'
      ],
      map: {lat: 33.416668, lng: -111.673833},
      tags: [
         'Furniture',
         'Jewelry',
         'Primitive',
         'Mall'
      ],
      description: 'Shop where the dealers shop! Voted "BEST ANTIQUE SHOP" by East Valley Tribune - Main Street\
       Antique Mall - 7260 E. Main St. –Masa Az 85207(E of Power RD). phone (480) 924-1 122 – Locally owned.\
       <br/><br/>Main Street Antique Mall is the kind of place you can get lost in with 28,000 square feet of fun.\
        Open 7 days a week 10 a.m. to 5:30 p.m. We have a large selection of quality antique furniture, primitives,\
         shabby chic painted and distressed furniture, Country French, Italian Provincial, retro/Mid-Century Modern,\
          industrial, architectural/salvage and re-purposed. We feature a large selection of vintage kitchen, glassware\
           including Fenton, depression and elegant glass. We continually restock a large selection of vintage estate\
            jewelry as well as Native American jewelry. We also offer garden, architectural/salvage, oil and gas\
             collectables as well as signage. A large variety of Cowboy, Western and Native American always available.\
              New merchandise arrives daily giving you a new experience every time you stop by.<br/><br/>We have a large\
               library to relax in. It is also available for research or purchase reasonably priced books. Large parking\
                lot for oversized vehicles, and RVs. Walkers and Wheel Chairs available for customer use. Bring your truck\
                 and trailer, we have staff that will assist you with loading. We feature Outdoor Antique Markets six time\
                  a year with as many as 110 vendors.<br/><br/>Other multi-vendor antique stores in the area, so plan to make\
                   a day in East Mesa.<br/><br/>Join our email list or follow us on Facebook or Twitter to be the first to see\
                    what new merchandise has arrived and events that are taking place at Main Street Antique Mall.',
      hero: './assets/store-images/MSAM/hero.jpg',
      pics: [
        './assets/store-images/MSAM/1.jpg',
        './assets/store-images/MSAM/2.jpg',
        './assets/store-images/MSAM/3.jpg',
        './assets/store-images/MSAM/4.jpg',
        './assets/store-images/MSAM/5.jpg',
        './assets/store-images/MSAM/6.jpg',
        './assets/store-images/MSAM/7.jpg'
      ],
      social: {
        facebook: 'https://www.facebook.com/Main-Street-Antique-Mall-135847359801281/',
        twitter: 'https://twitter.com/mainstantique',
        pinterest: 'https://www.pinterest.com/mainstantique/main-street-antique-mall/',
        instagram: 'https://www.instagram.com/mainstreetantique/'
      },
      contact: {
        phone: '480-924-1122',
        email: 'mainstreetantiquemall@gmail.com'
      },
      region: 'east'
    },
//////////////////////////////////////////////////////
    {
      name: 'NOBLESSE-NOBLEZA',
      address: [
        '730 E. Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
      ],
      description: 'Antiques, fine art, traditional furniture, distinctive gifts and decorative objects.\
       <br/>My emphasis is on fine porcelain. Antiguedades, arte, muebles y regalos de distincion.<br/>Owner:\
        Harriet von Merck Palmer<br/>Located within Antiques On Central',
      hero: './assets/store-images/NN/hero.jpg',
      pics: [
        './assets/store-images/NN/1.jpg',
        './assets/store-images/NN/2.jpg',
        './assets/store-images/NN/3.jpg',
        './assets/store-images/NN/4.jpg',
        './assets/store-images/NN/5.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'https://www.antiquesoncentral.com/',
        phone: '602-943-3859',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'central'
    },
//////////////////////////////////////////////////////
    {
      name: 'Antiques On Central',
      address: [
        '730 E. Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
        'Mall',
      ],
      description: 'ANTIQUES ON CENTRAL has been in business for nearly 30 years. With over 40 dealers,\
       we offer a wide variety of fabulous finds. Our selections include estate jewelry, high end costume\
        jewelry, sterling, art glass, studio pottery, the finest linen in Phoenix, fine art, mid-century\
         eclectics, fine porcelain, lighting, books and other paper items, photographs, rugs, and large and\
          small furniture. We also have greeting cards for your shopping convenience.<br/>We have an appraisal\
           clinic at least twice a year. We also have sales throughout the year. Please visit our website for\
            current events, our favorite referrals, and individual items that our dealers offer. If you would\
             like to be notified via email of these events, please contact the store or fill out the simple form\
              on our website.<br/>Partners:<br/>Cliff Sharar<br/>Doris Leis<br/>Sylvia Wells',
      hero: './assets/store-images/AOCnt/hero.jpg',
      pics: [
        './assets/store-images/AOCnt/1.jpg',
        './assets/store-images/AOCnt/2.jpg',
        './assets/store-images/AOCnt/3.jpg',
        './assets/store-images/AOCnt/4.jpg',
        './assets/store-images/AOCnt/5.jpg',
        './assets/store-images/AOCnt/6.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'https://www.antiquesoncentral.com/',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'central'
    },
//////////////////////////////////////////////////////
    {
      name: 'THE COLLECTION',
      address: [
        '730 E. Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
      ],
      description: 'You will find an interesting collection of formal and informal furniture, porcelain,\
        fine china, cut glass, crystal stemware, silver, and Asian art. There are many unusual gift items\
        and home accessories. I am always buying quality merchandise. <br/>THE COLLECTION WITHIN ANTIQUES\
        ON CENTRAL.<br/>Owner - Dorothy Flood',
      hero: './assets/store-images/TC/hero.jpg',
      pics: [
        './assets/store-images/TC/1.jpg',
        './assets/store-images/TC/2.jpg',
        './assets/store-images/TC/3.jpg',
        './assets/store-images/TC/4.jpg',
        './assets/store-images/TC/5.jpg',
        './assets/store-images/TC/6.jpg',
        './assets/store-images/TC/7.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'https://www.antiquesoncentral.com/',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'central'
    },
//////////////////////////////////////////////////////
    {
      name: 'P. J. SNOOP COLLECTIQUES',
      address: [
        '730 E. Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
      ],
      description: 'Quilts, fine estate jewelry, sterling, china and pottery, as well as many other interesting\
       and charming items. Shop with the Snoop Sister for items that you or someone you love will treasure, use,\
       and enjoy.<br/>Located within Antiques On Central.<br/>Owner - Paula Banks',
      hero: './assets/store-images/PJSC/hero.jpg',
      pics: [
        './assets/store-images/PJSC/1.jpg',
        './assets/store-images/PJSC/2.jpg',
        './assets/store-images/PJSC/3.jpg',
        './assets/store-images/PJSC/4.jpg',
        './assets/store-images/PJSC/5.jpg',
        './assets/store-images/PJSC/6.jpg',
        './assets/store-images/PJSC/7.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'https://www.antiquesoncentral.com/',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'central'
    },
//////////////////////////////////////////////////////
    {
      name: 'TREASUR4U',
      address: [
        '730 E. Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
      ],
      description: 'From funky to fine, you will find it here.<br/>I specialize in moderate to high-end costume\
       jewelry. I also offer fine sterling silver, crystal, porcelain, and other small treasures.<br/>Come and\
       visit my space for all of your personal and gifting needs. Dealer #818<br/>Located within Antiques On\
       Central<br/>Owner - Merle Jo Finks',
      hero: './assets/store-images/T4U/hero.jpg',
      pics: [
        './assets/store-images/T4U/1.jpg',
        './assets/store-images/T4U/2.jpg',
        './assets/store-images/T4U/3.jpg',
        './assets/store-images/T4U/4.jpg',
        './assets/store-images/T4U/5.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'https://www.antiquesoncentral.com/',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'central'
    },
//////////////////////////////////////////////////////
    {
      name: 'Antique Plaza',
      address: [
        '114 West Main Street, Mesa, 85201'
      ],
      map: {lat: 33.415433, lng: -111.834773},
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
        './assets/store-images/AP/3.jpg'
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
    },
//////////////////////////////////////////////////////
    {
      name: 'Call it New/Call it Antique',
      address: [
        '2049 W. Broadway Rd, Mesa,85202'
      ],
      map: {lat: 33.406286, lng: -111.876038},
      tags: [
        'Antiques',
        'Vintage',
        'Furniture',
        'Consignment',
        'Collectibles',
        'Mall',
      ],
      description: '<h3>43,000sf - 230 Dealers - 1000s of Consignors</h3><br/><br/><b>CALL IT ANTIQUE</b>\
       – is our Antique Mall with over 230 Dealers. With 350 combined spaces between showcases and booths\
        there should be no reason why you’d be walking around empty handed. What do we have you may ask??\
         Antiques, Vintage, Mid-Century, Rustic, Shabby, Furniture, Art, Collectibles, Retro, Games, Records,\
          Jewelry, Estate Finds, Home Décor, Tools, Toys, and SO MUCH MORE!!<br/><br/><b>CALL IT NEW</b> – is\
           our Consignment and Resale center up front with 1000s of Consignors. Find gently used newer and\
            older items at great prices. Keep an eye out for our constantly rotating tag colors. We are\
             always accepting items from Consignors – Clothing and Accessories, Furniture, Home Décor,\
              Records, CDs/DVDs, Books, Shoes, Jewelry, Housewares, Collectibles, Games, Toys, and so much more!!',
      hero: './assets/store-images/CIN/hero.png',
      pics: [
        './assets/store-images/CIN/1.jpg',
        './assets/store-images/CIN/2.jpg',
        './assets/store-images/CIN/3.jpg',
        './assets/store-images/CIN/4.jpg',
        './assets/store-images/CIN/5.jpg',
        './assets/store-images/CIN/6.jpg',
        './assets/store-images/CIN/7.jpg'
      ],
      social: {
        facebook: 'https://www.facebook.com/CallitNewCallitAntiqueMesa/',
        instagram: 'https://www.instagram.com/CallitNewCallitAntique/'
      },
      contact: {
        site: 'CallitNewCallitAntique.com',
        phone: '480-464-1234',
        email: 'callitnewcallitantique@gmail.com'
      },
      region: 'east'
    },
//////////////////////////////////////////////////////
  ];
  }
}
