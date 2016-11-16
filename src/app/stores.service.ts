import { Injectable, EventEmitter, Output } from '@angular/core';
// A service for interacting with store info
@Injectable()
export class StoresService {

  // Variable declarations
  stores: Array<any>;
  store: any;
  query: string = '';
  @Output() queryUpdated = new EventEmitter();

  // Returns the entire array of all store objects
  getStores() {
    return this.stores;
  };

  // Sets the active store currently accessed by the user
  setStore(passedStore: any) {
    this.store = passedStore;
  }

  // Returns entire store object for given store id
  getStore(id: number) {
    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].id === id) { return this.stores[i]; }
    }
  }

  // Sets the current search parameter and emits the updated query to update
  // any subscribed members
  setQuery(query: string) {
    this.query = query;
    this.queryUpdated.emit(this.query);
  }

  // Returns the current search parameter
  getQuery() {
    return this.query;
  }

  constructor() {
  // Contains an array of store objects with all store info
  this.stores = [
    {
      name: 'PAST Vintage',
      id: 45,
      address: ['120 W. Main, Mesa, 85201'],
      map: {lat: 33.415203, lng: -111.834871},
      tags: [
        'Mid-Century Modern',
        'Furniture',
        'Retro',
        'Danish'
      ],
      description: 'Who says you can’t live in the past? Meet PAST: the brainchild of four co-owners who merged their\
       backgrounds in graphic design, photography, journalism and business management to create the vintage furniture\
        and home decor shop they always dreamed of. Our aim is to not only show you how to incorporate vintage styles\
         into your home, but also make it affordable to do so. Our team’s relentless quest to find the finest pieces\
          from the past ensures you’ll have the most beautiful present.',
      hero: 'http://24rcle3xxiqq3u6gz62gczyh.wpengine.netdna-cdn.com/wp-content/uploads/past-vinta.jpg',
      pics: [
        'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11953144_1652765258271494_7433514891133886577_n.jpg?oh=63885ec909ccab6c2ee4b498d0aa7a96&oe=583BDE54',
        'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/13962525_1755467308001288_2028628013531203059_n.jpg?oh=1f3d2f407bc9e5f6313d6a3351dbc55b&oe=5878C1E9',
        'https://scontent.fphx1-2.fna.fbcdn.net/t31.0-8/12138474_1662118714002815_4936162802093071243_o.jpg',
        'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11041191_1647655358782484_7884207339641999001_n.jpg?oh=eff365fda8c5f84a78e06cf3c59d630d&oe=587FBD6C'
      ],
      social: {
        instagram: 'http://instagram.com/pastvintage',
        facebook: 'http://facebook.com/pastvintageshop'
      },
      contact: {
        email: 'pastvintage@gmail.com'
      },
      region: 'Mesa'
    },
  //////////////////////////////////////////////////////
    {
      name: 'ANTIQUES ON CAMELBACK, L.L.C.',
      id: 1,
      address: [
        '835 E. Camelback Rd, Phoenix, 85014',
        '3601 E. Indian School Rd, Phoenix, 85018',
        '2020 N. Scottsdale Rd, Scottsdale, 85257'
      ],
      map: {lat: 33.509050, lng: -112.062416},
      tags: [
      ],
      description: 'Longtime dealer and mall owner Stace Robbins has been in the antiques field since settling in\
       Phoenix in 1994, and has served as a VSADA officer for the past ten years. <br />Contact us for assistance in\
        decorating your home, business, and garden.  Incorporate your own special heirlooms in addition to selecting\
         from our inventory and those items we locate for you.  We also help with set dressing for film and theater.\
          <br/>Estate dispersal consultations, sales, and buy-outs. Your concierge for all things vintage!',
      hero: './assets/store-images/AOC/hero-f.jpg',
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
        email: 'stace@stacesplace.com'
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Main Street Antique Mall',
      id: 2,
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
      hero: './assets/store-images/MSAM/hero-f.jpg',
      pics: [
        './assets/store-images/MSAM/10.jpg',
        './assets/store-images/MSAM/9.jpg',
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
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
    {
      name: 'NOBLESSE-NOBLEZA',
      id: 3,
      address: [
        '730 E. Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
      ],
      description: 'Antiques, fine art, traditional furniture, distinctive gifts and decorative objects.\
       <br/>My emphasis is on fine porcelain. Antiguedades, arte, muebles y regalos de distincion.<br/>Owner:\
        Harriet von Merck Palmer<br/>Located within Antiques On Central',
      hero: './assets/store-images/NN/hero-f.jpg',
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
        site: 'http://antiquesoncentral.com',
        phone: '602-943-3859',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Antiques On Central',
      id: 4,
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
      hero: './assets/store-images/AOCnt/hero-f.jpg',
      pics: [
        './assets/store-images/AOCnt/1.jpg',
        './assets/store-images/AOCnt/2.JPG',
        './assets/store-images/AOCnt/3.jpg',
        './assets/store-images/AOCnt/4.JPG',
        './assets/store-images/AOCnt/5.jpg',
        './assets/store-images/AOCnt/6.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'http://antiquesoncentral.com',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'THE COLLECTION',
      id: 5,
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
      hero: './assets/store-images/TC/hero-f.jpg',
      pics: [
        './assets/store-images/TC/1.jpg',
        './assets/store-images/TC/2.jpg',
        './assets/store-images/TC/3.jpg',
        './assets/store-images/TC/4.JPG',
        './assets/store-images/TC/5.jpg',
        './assets/store-images/TC/6.jpg',
        './assets/store-images/TC/7.JPG',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'http://antiquesoncentral.com',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'P. J. SNOOP COLLECTIQUES',
      id: 6,
      address: [
        '730 E. Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
      ],
      description: 'Quilts, fine estate jewelry, sterling, china and pottery, as well as many other interesting\
       and charming items. Shop with the Snoop Sister for items that you or someone you love will treasure, use,\
       and enjoy.<br/>Located within Antiques On Central.<br/>Owner - Paula Banks',
      hero: './assets/store-images/PJSC/hero-f.jpg',
      pics: [
        './assets/store-images/PJSC/1.jpeg',
        './assets/store-images/PJSC/2.jpeg',
        './assets/store-images/PJSC/3.jpeg',
        './assets/store-images/PJSC/4.jpeg',
        './assets/store-images/PJSC/5.jpeg',
        './assets/store-images/PJSC/6.jpeg',
        './assets/store-images/PJSC/7.jpeg',
      ],
      social: {
        facebook: 'https://www.facebook.com/antiquesoncentral1/'
      },
      contact: {
        site: 'http://antiquesoncentral.com',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'TREASUR4U',
      id: 7,
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
      hero: './assets/store-images/T4U/hero-f.jpg',
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
        site: 'http://antiquesoncentral.com',
        phone: '602-264-4525',
        email: 'antiques@antiquesoncentral.com'
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Antique Plaza',
      id: 8,
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
      hero: './assets/store-images/AP/hero-f.jpg',
      pics: [
        './assets/store-images/AP/a1.jpg',
        './assets/store-images/AP/d5.jpg',
        './assets/store-images/AP/a6.jpg',
        './assets/store-images/AP/a7.jpg',
        './assets/store-images/AP/a8.jpg',
        // './assets/store-images/AP/a9.jpg',
        // './assets/store-images/AP/a10.jpg',
        // './assets/store-images/AP/a11.jpg',
        // './assets/store-images/AP/a12.jpg',
        // './assets/store-images/AP/a13.jpg',
        // './assets/store-images/AP/a14.jpg',
        './assets/store-images/AP/a15.jpg',
        './assets/store-images/AP/a16.jpg',
        './assets/store-images/AP/a17.jpg',
        './assets/store-images/AP/a18.jpg',
        './assets/store-images/AP/a19.jpg',
        './assets/store-images/AP/a20.jpg',
        './assets/store-images/AP/a21.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/AntiquePlazaMesa/',
        instagram: 'https://www.instagram.com/antiqueplaza/'
      },
      contact: {
        site: 'http://antiqueplazamesa.com',
        phone: '480-833-4844',
        email: 'antiqueplaza@gmail.com'
      },
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
    {
      name: 'Call it New/Call it Antique',
      id: 9,
      address: [
        '2049 W. Broadway Rd, Mesa, 85202'
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
      hero: './assets/store-images/CIN/hero-f.jpg',
      pics: [
        './assets/store-images/CIN/1.jpg',
        './assets/store-images/CIN/2.jpg',
        './assets/store-images/CIN/3.jpg',
        './assets/store-images/CIN/4.jpg',
        './assets/store-images/CIN/5.jpg',
        './assets/store-images/CIN/6.JPG',
        './assets/store-images/CIN/7.JPG'
      ],
      social: {
        facebook: 'https://www.facebook.com/CallitNewCallitAntiqueMesa/',
        instagram: 'https://www.instagram.com/CallitNewCallitAntique/'
      },
      contact: {
        site: 'http://CallitNewCallitAntique.com',
        phone: '480-464-1234',
        email: 'callitnewcallitantique@gmail.com'
      },
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
    {
      name: 'Merchant Square',
      id: 10,
      address: [
        '1509 N. Arizona Ave., Chandler, 85225'
      ],
      map: {lat: 33.330828, lng: -111.841001},
      tags: [
        'Mall',
      ],
      description: 'Arizona’s Largest Antiques and Collectibles Mall, with 40,000 sq. ft. indoors, 18,000 sq.\
       ft. outdoors in our “Pickers Alley”. With 200+ Merchants, 130 booths, 104 showcases, full of Antiques,\
       Collectibles, furniture, new Home Décor, and Boutique items.  Also home of Pittsburg Willy’s Gourmet \
      Hot Dogs and More, serving up Hot Dogs with gourmet toppings, homemade chili, sandwiches, Pierogies, \
      desserts and now serving breakfast on weekends.</br>Open 7 Days a week: 9 am – 5 pm, and Wed. until 8 pm.',
      hero: './assets/store-images/MS/hero-f.jpg',
      pics: [
        './assets/store-images/MS/1.jpg',
        './assets/store-images/MS/2.jpg',
        './assets/store-images/MS/3.jpg',
        './assets/store-images/MS/4.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/MerchantSquare/',
        twitter: 'https://twitter.com/themerchsquare',
        instagram: 'https://www.instagram.com/explore/locations/517508099/merchants-square-antiques-and-decor/'
      },
      contact: {
        site: 'http://merchantsquareantiques.com',
        phone: '480-792-1919',
      },
      region: 'Chandler'
    },
//////////////////////////////////////////////////////
    {
      name: 'Beyond Expression Antiques',
      id: 12,
      address: [
        '3817 E. McKellips Rd, Mesa, 85215',
      ],
      map: {lat: 33.451509, lng: -111.748513},
      tags: [
        'Store',
      ],
      description: 'Beyond Expression Antiques was started in Bedford Hills, New York in 1977 by owners Ron and\
       Roberta Hopkins.  They were very successful there, written up in several magazines and the New York \
       Times, and in 1988 decided to move to Mesa, Arizona where they had visited friends and fell in love with\
        the area. They began by doing antique shows, mostly in California, but also in Houston, Dallas, Reno,\
         New Orleans, Kansas City, Chicago, Baltimore and Miami. In 1997 they bought an old adobe house at 3817\
          East McKellips Road in Mesa and opened an antique shop, having gotten tired of traveling so much.\
            The shop, which was built in the 1920’s is a perfect showcase for their American Victorian\
             furniture and beautiful glassware, porcelain, silver, clocks, music boxes, lamps and paintings.',
      hero: './assets/store-images/BEA/hero-f.jpg',
      pics: [
        './assets/store-images/BEA/1.jpg',
        './assets/store-images/BEA/2.jpg',
        './assets/store-images/BEA/3.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/BeyondExpressionAntiques/',
      },
      contact: {
        site: 'http://www.beyondexpressionantiq.com/',
        phone: '480-854-7755',
        email: 'rhop2510@aol.com'
      },
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
    {
      name: 'Downtown Antiques',
      id: 13,
      address: [
        '114 West Main Street, Mesa, 85201'
      ],
      map: {lat: 33.415433, lng: -111.834773},
      tags: [
      ],
      description: 'Located in the heart of downtown Mesa. Filled with wonderful antique furniture, art, \
      glassware, Prussia, vintage, hats, Art Deco, and lots of miscellaneous.',
      hero: './assets/store-images/DA/hero-f.jpg',
      pics: [
        './assets/store-images/DA/1.jpg',
        './assets/store-images/DA/2.jpg',
        './assets/store-images/DA/3.jpg',
        './assets/store-images/DA/4.jpg',
        './assets/store-images/DA/5.jpg',
        './assets/store-images/DA/6.jpg',
        './assets/store-images/DA/7.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/AntiquePlazaMesa/',
      },
      contact: {
        email: 'downtownantiques@aol.com',
        phone: '602-909-6195',
      },
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
    {
      name: 'History By George',
      id: 14,
      address: [
        '129 W. Main St, Mesa, 85201'
      ],
      map: {lat: 33.414859, lng: -111.835303},
      tags: [
        'Military',
        'Store'
      ],
      description: 'Specializing in militaria and historical antiques. Antiques, collectibles, books, prints,\
       swords, political, sports, tokens, US & foreign coins, medals & stamps.</br></br> George & Ko Notarpole',
      hero: './assets/store-images/HBG/hero-f.JPG',
      pics: [
        './assets/store-images/HBG/1.jpg',
        './assets/store-images/HBG/2.jpg',
        './assets/store-images/HBG/3.jpg',
        './assets/store-images/HBG/4.jpg',
        './assets/store-images/HBG/5.jpg',
        './assets/store-images/HBG/6.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/History-By-George-189512091086435/',
      },
      contact: {
        site: 'http://historybygeorge.com/',
        phone: '480-898-3878',
      },
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
    {
      name: 'The Glass Urn',
      id: 15,
      address: [
        '120 W. Main St, Mesa, 85201'
      ],
      map: {lat: 33.415203, lng: -111.834871},
      tags: [
        'Glass',
        'Store'
      ],
      description: 'Glass stemware matching service, Fostoria, Cambridge, Tiffin, Heisey, etc. Miscellaneous\
       collectibles. Large collection of vintage linens.',
      hero: './assets/store-images/TGU/hero-f.jpg',
      pics: [
        './assets/store-images/TGU/1.jpg',
        './assets/store-images/TGU/2.jpg',
        './assets/store-images/TGU/3.jpg',
        './assets/store-images/TGU/4.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/glassurnantiques/',
      },
      contact: {
        site: 'http://theglassurn.com/',
        phone: '480-203-2285',
      },
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
    // @todo
    // {
    //   name: 'Endlich',
    //   id: 16,
    //   address: [
    //     '???'
    //   ],
    //   map: {lat: 33.415203, lng: -111.834871},
    //   tags: [
    //   ],
    //   description: '???',
    //   hero: 'http://gregmillikan.com/wp-content/uploads/2015/09/man-shrugging-shoulders.jpg',
    //   pics: [
    //     'http://gregmillikan.com/wp-content/uploads/2015/09/man-shrugging-shoulders.jpg',
    //   ],
    //   social: {
    //   },
    //   contact: {
    //     phone: '602-840-1347',
    //   },
    //   region: 'Phoenix'
    // },
//////////////////////////////////////////////////////
    // @todo
    // {
    //   name: 'Scott Gram Antiques, Inc.',
    //   id: 17,
    //   address: [
    //     '???'
    //   ],
    //   map: {lat: 33.415203, lng: -111.834871},
    //   tags: [
    //     'Glass'
    //   ],
    //   description: 'BUYING the Best art glass; Tiffany, Steuben, French Cameo including Daum Nancy & Galle, \
    //   English cameo glass including Webb, Stevens & Williams.  High end Victorian art glass, also fine jewelry,\
    //    sterling silver, bronze, paintings, etc…</br></br>Member ISA (International Society of Appraisers)',
    //   hero: 'http://jaimiefield.com/wp-content/uploads/2013/10/Shrugging-Man.jpg',
    //   pics: [
    //     'http://jaimiefield.com/wp-content/uploads/2013/10/Shrugging-Man.jpg',
    //   ],
    //   social: {
    //   },
    //   contact: {
    //     phone: '602-705-2503',
    //     email: 'sdgram@cox.net'
    //   },
    //   region: 'Phoenix'
    // },
//////////////////////////////////////////////////////
    {
      name: 'Kacer Enterprises',
      id: 18,
      address: [
        '730 E Missouri Ave, Phoenix, 85014'
      ],
      map: {lat: 33.516725, lng: -112.063382},
      tags: [
        'Sterling',
        'Silver'
      ],
      description: 'Specializing in sterling silver flatware and holloware for obsolete, discontinued, as well\
       as current patterns. We have a large inventory for you to select that exact piece from, or maybe we can\
        conduct a search from our nationwide network. By appointment only at Antiques on Central, 730 E\
         Missouri Ave, Phoenix, 85014.<br /><br />Nyla, & Jerry Kacer',
      hero: './assets/store-images/KE/hero-f.jpg',
      pics: [
        './assets/store-images/KE/1.jpg',
        './assets/store-images/KE/2.jpg',
        './assets/store-images/KE/3.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/KacerEnterprises/',
      },
      contact: {
        site: 'http://kacerenterprises.com',
        phone: '480-706-1864',
        email: 'nyla@mac.com'
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Picture The Past Antiques',
      id: 19,
      address: [
        '4802 N. 7th Ave, Phoenix, 85013'
      ],
      map: {lat: 33.507771, lng: -112.082501},
      tags: [
        'Store'
      ],
      description: 'A nice selection of antique art and prints, old books, photography and paper Americana.\
       Vintage Mexican and Native American jewelry, curios, basketry and pottery. An assortment of quality \
       porcelain, china, silver, statuary and furniture with an emphasis on the unusual and antiques of \
       interest to men. (Located two blocks south of Camelback and the Melrose District light rail stop)',
      hero: './assets/store-images/PTPA/hero-f.jpg',
      pics: [
        './assets/store-images/PTPA/1.jpg',
        './assets/store-images/PTPA/2.jpg',
        './assets/store-images/PTPA/3.jpg',
        './assets/store-images/PTPA/4.jpg',
        './assets/store-images/PTPA/5.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/Picture-The-Past-Antiques-302388186489940/',
      },
      contact: {
        phone: '602-565-9526',
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Phoenix Lamps',
      id: 20,
      address: [
        '2225 E. Indian School Rd, Phoenix, 85013'
      ],
      map: {lat: 33.494603, lng: -112.033410},
      tags: [
        'Store'
      ],
      description: 'Lamps – Shades – Lamp  & Shade Repairs - Antiques. Over 6,000 shades in stock. Custom lamp\
       making – antique lamp restoration – rewiring. Largest selection of shades in the country.',
      hero: './assets/store-images/PL/hero-f.jpg',
      pics: [
        './assets/store-images/PL/1.jpg',
        './assets/store-images/PL/2.jpg',
        './assets/store-images/PL/3.jpg',
        './assets/store-images/PL/4.jpg',
        './assets/store-images/PL/5.jpg',
      ],
      social: {},
      contact: {
        site: 'http://www.phoenixlampandshade.com/',
        phone: '602-955-5640',
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Antique Gatherings',
      id: 21,
      address: [
        '3601 E Indian School Rd, Phoenix, 85018'
      ],
      map: {lat: 33.494714, lng: -112.003802},
      tags: [
        'Mall'
      ],
      description: 'Under new ownership of Amanda Wilson, Amanda Wilson Antiques. over 18,000 sq ft of\
       beautyful antiques, decorative accessories, art, rugs, and many unusual and one of a kind items!',
      hero: './assets/store-images/AG/hero-f.jpg',
      pics: [
        './assets/store-images/AG/1.jpg',
        './assets/store-images/AG/2.jpg',
        './assets/store-images/AG/3.jpg',
        './assets/store-images/AG/4.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/AntiqueGatherings/',
        instagram: 'https://www.instagram.com/antiquegatherings/'
      },
      contact: {
        site: 'http://www.antiquegatherings.com/',
        phone: '602-956-8203',
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Appraisals By Bradbury Inc.',
      id: 22,
      address: [
        '7001 N. Scottsdale Rd #143, Scottsdale, 85253'
      ],
      map: {lat: 33.539505, lng: -111.924363},
      tags: [
        'Service',
        'Appraisal'
      ],
      description: 'Appraisals for all purposes; Probate, estate, trusts, antiques, insurance,\
       collections, divorce, inventories, offices & household furnishings, moving, storage services, \
       damage, remodel/demolitions, tools & shop equipment. Barbara June Bradbury ASA, ISA',
      hero: './assets/store-images/BAA/hero-f.jpg',
      pics: [
        './assets/store-images/BAA/hero-f.jpg',
      ],
      social: {
      },
      contact: {
        site: 'http://www.ethicalaz.com/bradburysappraisalsinc',
        phone: '480-947-2378',
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    // @todo
    // {
    //   name: 'Family Heritage Estate Sales',
    //   id: 23,
    //   address: [
    //     '???'
    //   ],
    //   map: {lat: 33.539505, lng: -111.924363},
    //   tags: [
    //     'Service',
    //     'Appraisal'
    //   ],
    //   description: '???',
    //   hero: 'http://1gw2vk209dcz2vvkvqvdfma1.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/shrugging-guy.jpg',
    //   pics: [
    //     'http://1gw2vk209dcz2vvkvqvdfma1.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/shrugging-guy.jpg',
    //   ],
    //   social: {
    //   },
    //   contact: {
    //     phone: '602-253-7253',
    //   },
    //   region: 'Phoenix'
    // },
//////////////////////////////////////////////////////
    {
      name: 'Stuff Antiques l.l.c.',
      id: 24,
      address: [
        '4206 N. Central Ave, Phoenix, 85012'
      ],
      map: {lat: 33.539505, lng: -111.924363},
      tags: [
        'Store',
        'Appraisal'
      ],
      description: 'Unbelievable collection of authentic quality pieces. Specializing (since 1967)\
       in Antique lighting fixtures of all types, including table lamps, hanging fixtures, floor\
        lamps, and wall sconces (indoor and outdoor), stained and beveled glass windows and doors,\
         furniture, chairs, stack bookcases, display cases and stainless steel and metal cabinets.\
          Slot machines, gumball machines, iron beds, and advertising items. Preservation,\
           restoration and repair services available. Always buying quality antique lamps, fixtures\
            and the Unusual. <br /><br />Joe D. & Jyoti Weaver',
      hero: './assets/store-images/StA/hero-f.jpg',
      pics: [
        './assets/store-images/StA/hero-f.jpg',
      ],
      social: {
      },
      contact: {
        phone: '602-266-1967',
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Matlosz Antiques & Co.',
      id: 25,
      address: [
        '2227 N. 24 St, Phoenix, 85008'
      ],
      map: {lat: 33.472682, lng: -112.029879},
      tags: [
        'Store',
        'Service'
      ],
      description: 'The finest European and American interiors. Twenty five years in business. Old\
       World craftsmanship, repair, restoration and refinishing services. We offer consignment,\
        pickup and delivery.',
      hero: './assets/store-images/Mat/hero-f.jpg',
      pics: [
        './assets/store-images/Mat/1.jpg',
        './assets/store-images/Mat/2.jpg',
        './assets/store-images/Mat/3.jpg',
        './assets/store-images/Mat/4.jpg',
        './assets/store-images/Mat/5.jpg',
      ],
      social: {
      },
      contact: {
        site: 'http://matloszantiques.com/',
        email: 'wesleymatlosz@yahoo.com',
        phone: '602-273-7974',
      },
      region: 'Phoenix'
    },
//////////////////////////////////////////////////////
    {
      name: 'Michelle\'s Antiques',
      id: 26,
      address: [
        '10 N Macdonald, Mesa, 85201'
      ],
      map: {lat: 33.415493, lng: -111.834368},
      tags: [
        'Store',
        'Service',
        'Vintage'
      ],
      description: 'When it comes to antique home decor Everyone has different tastes and budgets.\
       With the proper help, you can easily stay within your small or large budget, and get that\
        high style that you desire for your home. Michelle’s Antiques and Vintage Marketplace,\
         located in the charming downtown Mesa AZ, has all the tools and knowledge to aid you in\
          your decorating pursuits. We have a wide array of styles, textures, sizes, colors, and\
           designs to fit with any style of room. <br /><br />At Michelle’s Antiques and Vintage Marketplace,\
            we take pride in the variety and uniqueness of our antique pieces displayed in our 2,000\
             square foot shop, six rooms filled with curated vintage and antique wares.<br /><br />Are you\
              searching for that big centerpiece, or unique style for you little girls bedroom?\
               Perhaps you’re looking for a chic vintage table providing the perfect space for\
                entertaining guests or an Antique to add to your collection? You will not be\
                 disappointed with our unique stock, so come visit us to find your perfect antique decor!',
      hero: './assets/store-images/MA/hero-f.jpg',
      pics: [
        './assets/store-images/MA/1.jpg',
        './assets/store-images/MA/2.jpg',
        './assets/store-images/MA/3.jpg',
        './assets/store-images/MA/4.jpg',
      ],
      social: {
        facebook: 'https://www.facebook.com/michellesantiquesmesa/',
        instagram: 'https://www.instagram.com/michellesantiques/',
        twitter: 'https://twitter.com/antiquesmesaaz'
      },
      contact: {
        site: 'http://www.michellesantiques.org',
        phone: '602-284-9064',
      },
      region: 'Mesa'
    },
//////////////////////////////////////////////////////
  ];
  }
}
