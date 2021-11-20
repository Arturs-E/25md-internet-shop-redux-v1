interface ProductData {
  productName: string;
  price: number;
  imgUrl: string;
}

const products:ProductData[] = [
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
];

export default products;
export type { ProductData };
