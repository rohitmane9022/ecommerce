import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "Nike Air Max 90",
    productDescription: "Lace up and feel the legacy. Produced at the cross section of art, music and culture, this champion running shoe helped define the '90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle outsole and exposed Air cushioning keep it alive and well.",
    productImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f64a8cb2-376d-4e9f-b075-6d15577420f7/air-max-90-shoes-kRsBnD.png",
    gender: "Man",
    discountPercent: 10,
    price: 15000  ,
    rating: 4.5,
    
  },
  {
    _id: uuid(),
    productName: "Air Jordan Low SE",
    productDescription: "This low-top AJ1 remakes a classic with new colours and textures, giving you a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favourite.",
    productImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6e58a75a-9149-4e77-80ae-5a6cab84fcb1/air-jordan-1-low-se-shoes-hTG5P9.png",
    gender: "Man",
    price: 12000,
    rating: 3.8,
    
  },
  {
    _id: uuid(),
    productName: "Nike Air Jordan 1",
    productDescription: "Get into some summery fun in your new fave AJ1s. Made with a combination of suede and canvas, this pair gives you the comfort you know and love with a seasonal update.",
    productImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/650de059-d5d8-4372-8e07-072b3040ba69/air-jordan-1-mid-se-shoes-p48zQ5.png",
    gender: "Man",
    price: 20000,
    rating: 4.7,
    
  },
  {
    _id: uuid(),
    productName: "Nike Blazer Low '77 Vintage",
    productDescription:
      "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it's the must-have wardrobe staple that will take you everywhere.",
    productImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f031c6e2-5941-4bb7-a29d-31683f5d4da2/blazer-low-77-vintage-shoes-HmmkdX.png",
    gender: "Man",
    price: 7195,
    rating: 4.9,
   
  },
  {
    _id: uuid(),
    productName: "Nike Free Run 5.0",
    productDescription:
      "Made from at least 20% recycled material by weight, the sock-like boot of this Nike Free is designed to transition from running to training to your everyday routine. With a breathable knit upper, it combines the flexibility you love with a secure design that will help keep you close to the ground for that barefoot feeling. New cushioning is lighter, softer and more responsive than previous versions so you can keep moving in comfort whether you're on the tarmac or track.",
    productImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c3ee806-14df-4021-a3a2-c7a3241e7428/free-run-5-road-running-shoes-m8L9mr.png",
      gender: "Man",
    price: 12000,
    rating: 4.9,
    
  },
  {
    _id: uuid(),
    productName: "Jordan One Take 4 PF",
    productDescription: "Get that speed you need, just like Russ. Inspired by Russell Westbrook's latest signature shoe, the outsole of the Jordan One Take 4 wraps up nearly to the midsole so you can start, stop or change direction in an instant. Meanwhile, energy-returning Zoom Air cushioning in the forefoot keeps you goin' (and goin' and goin').",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c6d2fe1-bc70-4cbd-9b90-4febdaf38c0b/jordan-one-take-4-pf-shoes-cdsVn1.png",
    gender: "Man",
    price: 9000,
    rating: 4.8,
    
  },
  {
    _id: uuid(),
    productName: "Air Jordan 1 Mid",
    productDescription: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/de847542-b387-4b1e-9968-15cae80180a1/air-jordan-1-mid-shoes-86f1ZW.png",
    gender: "Woman",
    price: 14000,
    rating: 4.7,
    
  },
  {
    _id: uuid(),
    productName: "Nike Dunk Low",
    productDescription: "Tulips, daffodils and Dunks! Indulge this spring with a garden-fresh bouquet. Awash in energetic pastels like Oxygen Purple, Electric Algae and Sundial, this Dunk Low lets your style bloom. Crisp leather delivers classic hoops-to-street style, and if that's not enough, the padded collar lets you take your game anywhere—in comfort.",
    productImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2e4af88f-bca1-4050-9024-05406a00c372/dunk-low-shoes-63phv7.png",
      gender: "Woman",
      price: 6000,
    rating: 4.6,
    
  },
  {
    _id: uuid(),
    productName: "Nike Dunk High Retro SE",
    productDescription: "Created for the hardwood but taken to the streets, the b-ball icon returns with crisp synthetic leather and retro colours. The classic design channels '80s vintage back onto the streets while the padded, high-top collar adds an old-school look rooted to comfort.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/98e8ea6a-2304-41e2-b270-023823eb1bdc/dunk-high-retro-se-shoes-ZgKR1S.png",
    gender: "Man",
    price: 10000,
    rating: 4.9,

  },
  {
    _id: uuid(),
    productName: "Nike Alphafly 2",
    productDescription:
      "Once you take a few strides in the Nike Air Zoom Alphafly NEXT% 2, you'll never look at your favourite pair of old racing shoes the same way again. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system marries the 2 worlds of comfort and speed in holy running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e0b55a0c-0619-4a43-8790-1d97318ad30b/alphafly-2-road-racing-shoes-DcWrKF.png",
    gender: "Woman",
    price: 16000,
    rating: 3.6,
  },
  {
    _id: uuid(),
    productName: "Nike Air Max 270",
    productDescription:
      "Legendary Air gets lifted. Our first lifestyle Air Max brings you style, comfort and a whole lot of Air. An extra-large window in the heel lets you show off one of our greatest innovations while experiencing plush cushioning. Add a lightweight upper, low-cut collar and fresh pops of colour and you've got the perfect kicks for everyday fun.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/231381b3-0087-4efa-ad6a-15ab497715ae/air-max-270-shoes-xTswM2.png",
    gender: "Man",
    price: 18000,
    rating: 4.6,
    
  },
  {
    _id: uuid(),
    productName: "Nike Renew Run 4",
    productDescription:
      "When running becomes part of your routine, you need a shoe that helps keep you comfortable for the long haul. The Nike Renew Run 4 offers an elevated level of cushioning and springy responsiveness that'll have you coming back for more miles tomorrow, excited and looking forward to moving your running journey forwards.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/83544b1d-97d7-4baf-86f6-70d462382c30/renew-run-4-road-running-shoes-lxfK8c.png",
    gender: "Man",
    price: 11000,
    rating: 2.5,
    
  },
  {
    _id: uuid(),
    productName: "Nike Air Max Excee",
    productDescription: "Inspired by the Nike Air Max 90, the Nike Air Max Excee celebrates a classic through a new lens. Elongated design lines and distorted proportions on the upper elevate an icon into a modern space.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ebc12e2-b3ae-4cc0-8056-a457f1eaf600/air-max-excee-womens-shoes-jKsgMj.png",
    gender: "Woman",
    price: 13000,
    rating: 4.6,
    
  },
  {
    _id: uuid(),
    productName: "Nike Revolution 6",
    productDescription:
      "Here's to new beginnings between you and the pavement. Lace up the 100% recycled laces and set the pace at the start of your running journey with the plush feel of the Nike Revolution 6. We know comfort is key to a successful run, so we made sure your steps are cushioned and flexible for a soft ride. It's an evolution of a favourite, with a breathable design made with at least 20% recycled content by weight.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d9b5defa-2dcb-4a0c-9150-592f2195bad4/revolution-6-road-running-shoes-vjrrwc.png",
    gender: "Woman",
    price: 8000,
    rating: 4.8,
  },
  {
    _id: uuid(),
    productName: "Nike Air Zoom Terra Kiger 7",
    productDescription:
      "Run the trail in a super responsive running shoe. Fast and lightweight, it delivers a breathable and secure feel as you race over rocky paths. Updated traction lugs provide stability for your downhill miles.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1802a64b-3520-425b-9151-c42ce0955057/kiger-7-Mans-trail-running-shoes-9tC16Z.png",
    gender: "Woman",
    price: 14000,
    rating: 4.7,
   
  },
  {
    _id: uuid(),
    productName: "Nike Air Zoom Vomero 14",
    productDescription:
      "Break through to new PRs on your everyday run with the Nike Air Zoom Vomero 14.It adds a responsive snap to every step, with full-length cushioning for a super-smooth sensation.Sleek and breathable up top, it has plenty of support around the ankle to help you keep the pace.",
    productImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fxpcsz7bobvyyjtpe6r7/air-zoom-vomero-14-road-running-shoe-m4gpHg.png",
    gender: "Man",
    price: 18000,
    rating: 4.9,
  },
  {
    _id: uuid(),
    productName: "Nike React Infinity Run Flyknit",
    productDescription:
      "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning around the heel and ankle for a supportive sensation. Keep running—we've got you.",
    productImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/17bef034-3a34-4db7-bb5c-90488d936e07/react-infinity-3-road-running-shoes-S5Srkq.png",
    gender: "Woman",
    price: 16000,
    rating: 2.8,
    
  },
];
