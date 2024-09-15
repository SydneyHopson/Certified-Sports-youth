import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Certified Apparel",
   
  subtitle: "Limited Edition Certified Mids ",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook, link: "https://www.facebook.com/certified.apparel.2024" },
    { icon: instagram, link: "https://www.instagram.com/certifiedapparel2" },
    { icon: twitter, link: "https://x.com/certified15146" },
    { icon: youtube, link: "https://www.tiktok.com/@certified15146" }
  ],
};

const popularsales = {
  title: "Popular Cleats",
  items: [
    {
      id: "0p0x1",
      title: "Certified Mid Youth Cleats  ",
      text: "Red & BlK Youth Cleats",
      rating: "5",
      btn: "Buy Now",
      img: heroimg,
      price: "105",
      color: "from-[#820A0A] to-black",
      shadow: "shadow-lg shadow-[#820A0A] ",
    },
    {
      id: "0p0x2",
      title: "Certified Mid Youth Cleats",
      text: "Cyan Youth Cleats",
      rating: "4.5",
      btn: "Buy Now",
      img: sneakershoe,
      price: "105",
      color: "from-[#348b91] to-white",
      shadow: "shadow-lg shadow-[#348b91]",
    },
    {
      id: "0p0x3",
      title: "Certified Mid Youth Cleats ",
      text: "Youth Cleats",
      rating: "5+",
      btn: "Buy Now",
      img: product13,
      price: "105",
      color: "from-[#464647]  to-[#dad5ca]",
      shadow: "shadow-lg shadow-[#464647] ",
    },
    
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: " YOUTH ATHLETIC COMPRESSION SHIRT  ",
  text: "Introducing the Youth Athletic Compression Shirt by Certified Apparel, designed to enhance performance and comfort. Crafted from high-quality, moisture-wicking fabric, this shirt provides superior support and flexibility. Perfect for young athletes, it offers a snug fit that aids muscle recovery and reduces fatigue. Ideal for training or competition, this compression shirt ensures your child stays cool, dry, and ready to excel.",
  img: hightlightimg
};

const sneaker = {
  heading: "FEATURED",
  title: "CERTIFIED YOUTH Electric Blues",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  img: psale1,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: " Compression Shirt",
      text: "ideal for training ",
      rating: "4+",
      btn: "Buy Now",
      img: product7,
      price: "35",
      color: "from-black to-white",
      shadow: "shadow-lg shadow-gray",
    },
    {
      id: "0M0x2",
      title: "Youth Certified T-Shirt",
      text: "Youth T-Shirt",
      rating: "4+",
      btn: "Buy Now",
      img: product2,
      price: "20",
      color: "from-yellow-400 to-black-100",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x3",
      title: "Youth Certified Hoodie",
      text: "Comfortable Youth Hoodie",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "45",
      color: "from-red-600 to-black",
      shadow: "shadow-lg shadow-red-500",
    },
    {
      id: "0M0x4",
      title: "Youth Sweat Pants",
      text: "Black Sweat Pants",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "35",
      color: "from-red-600 to-black",
      shadow: "shadow-lg shadow-red-500",
    },
    {
      id: "0M0x5",
      title: "Youth Certified Hoodie",
      text: "Green Comfortable Hoodie",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "45",
      color: "from-green-600 to-gray",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x6",
      title: "Youth Sweat Pants",
      text: "Green Sweat Pants",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "35",
      color: "from-green-600 to-gray",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x7",
      title: "Youth Top & Bottom Set",
      text: "Cyan Top & Bottom Set",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "45",
      color: "from-[#7bbdb8] to-white-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x8",
      title: "Youth Top & Bottom Set",
      text: "Royal Blue Top & Bottom",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "45",
      color: "from-[#032c6c] to-white-900",
      shadow: "shadow-lg shadow-[#032c6c]",
    },
    {
      id: "0M0x9",
      title: "Certified Duffle Bag",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "30",
      color: "from-[#634c41] to-[#dcd5cb]",
      shadow: "shadow-lg shadow-[#634c41]",
    },
    {
      id: "0M0x10",
      title: "Certified Water bottle",
      text: "Sports Water bottle",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "10",
      color: "from-[#494848] to-[#e8ddda]",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x11",
      title: "Certified Back Pack",
      text: "Youth Back Pack",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "25",
      color: "from-slate-900 to-white",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Certified Slides",
      text: "Youth Slides",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "20",
      color: "from-[#c6b6a4] to-[#e9e5df]",
      shadow: "shadow-lg shadow-[#c6b6a4]",
    },
    {
      id: "0p0x13",
      title: "Certified All-Stars  ",
      text: "Youth Cleats",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "105",
      color: "from-black to-white",
      shadow: "shadow-lg shadow-black ",
    },
    {
      id: "0p0x14",
      title: "Certified Electric Blues",
      text: "Youth Cleats",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "75",
      color: "from-blue-500 to-white",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x15",
      title: "Certified Midnight Sky ",
      text: "Youth Cleats",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "75",
      color: "from-yellow-500  to-gray",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0p0x16",
      title: "Certified Midnight Sky ",
      text: "Youth Cleats",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "75",
      color: "from-yellow-500  to-gray",
      shadow: "shadow-lg shadow-yellow-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Nike Air Max Plus",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Puma Announces Breanna",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About Certified"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Contact Us"},
    ],
    [
     
      {link: "Promotions"},
     {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
