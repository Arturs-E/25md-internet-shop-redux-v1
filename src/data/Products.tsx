interface Products {
  productName: string;
  price: number;
  imgUrl: string;
}

const products:Products[] = [
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
];

export default products;
export type { Products };
