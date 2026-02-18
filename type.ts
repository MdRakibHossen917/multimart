 export type Review = {
     reviewerName: string;
  rating: number;
  comment: string;
  date: string;
  reviewerEmail: string;
};
 export interface ProductType {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
      dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  discountPercentage: number;
  id: number;
  images: string[];
    meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;

  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
  quantity?: number;

  


  




  
}
export interface StateType {
    multimart:{
      cart: ProductType[];
      favorite: ProductType[];
      userInfo: any;
        

    }
 
}
