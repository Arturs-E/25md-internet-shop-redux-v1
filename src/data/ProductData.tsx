interface ProductData {
  productName: string;
  price: number;
  imgUrl: string;
}

const products:ProductData[] = [
  {
    productName: 'Leica Disto D1',
    price: 70.00,
    imgUrl: './assets/images/disto/disto d1.jpg',
  },
  {
    productName: 'Leica Disto D110',
    price: 160.00,
    imgUrl: './assets/images/disto/disto d110.jpg',
  },
  {
    productName: 'Leica Disto D2',
    price: 200.00,
    imgUrl: './assets/images/disto/disto d2.jpg',
  },
  {
    productName: 'Leica Disto X3',
    price: 310.00,
    imgUrl: './assets/images/disto/disto x3.jpg',
  },
  {
    productName: 'Leica Disto X4',
    price: 430.00,
    imgUrl: './assets/images/disto/disto x4.jpg',
  },
  {
    productName: 'Leica Disto D510',
    price: 500.00,
    imgUrl: './assets/images/disto/disto d510.jpg',
  },
  {
    productName: 'Leica Disto D810',
    price: 720.00,
    imgUrl: './assets/images/disto/disto d810.jpg',
  },
  {
    productName: 'Leica Disto S910',
    price: 1530.00,
    imgUrl: './assets/images/disto/disto s910.jpg',
  },
  {
    productName: 'Leica Disto DST360',
    price: 590.00,
    imgUrl: './assets/images/disto/dst360.png',
  },
  {
    productName: 'Leica Lino L2',
    price: 240.00,
    imgUrl: './assets/images/lino/lino l2.jpg',
  },
  {
    productName: 'Leica Lino L2G',
    price: 400.00,
    imgUrl: './assets/images/lino/lino l2g.jpg',
  },
  {
    productName: 'Leica Lino L2P5',
    price: 390.00,
    imgUrl: './assets/images/lino/lino l2p5.png',
  },
  {
    productName: 'Leica Lino L2P5G',
    price: 600.00,
    imgUrl: './assets/images/lino/lino l2p5g.jpg',
  },
  {
    productName: 'Leica Lino L6R',
    price: 495.00,
    imgUrl: './assets/images/lino/lino l6r.jpg',
  },
  {
    productName: 'Leica Lino L6G',
    price: 570.00,
    imgUrl: './assets/images/lino/lino l6g.jpg',
  },
  {
    productName: 'Leica Lino L4P1',
    price: 600.00,
    imgUrl: './assets/images/lino/lino l4p1.jpg',
  },
  {
    productName: 'Leica Lino ML180',
    price: 1350.00,
    imgUrl: './assets/images/lino/lino ml180.jpg',
  },
  {
    productName: 'Leica Disto 3D',
    price: 5600.00,
    imgUrl: './assets/images/disto/disto 3d.jpg',
  },
  {
    productName: 'Leica BLK3D',
    price: 4900.00,
    imgUrl: './assets/images/blk/blk3d.png',
  },
  {
    productName: 'Leica BLK360',
    price: 15900.00,
    imgUrl: './assets/images/blk/blk360.jpg',
  },
  {
    productName: 'Leica BLK2GO',
    price: 35000.00,
    imgUrl: './assets/images/blk/blk2go.jpg',
  },
];

const productDataLength = products.length;

export { products, productDataLength };
export type { ProductData };
