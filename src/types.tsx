export interface ProductProps {
    id: string,
    title : string ,
    rowprice : number ,
    price : number ,
    brand : string ,
    rating : string ,
    discribtion  : string,
    image : string,
    isnew: boolean,
    quantity: number,
    qty : number,
    onSale : string
  }

  export interface StateProps {
    cart: {
      productData: ProductProps[];
    };
  }