export type productCardType = {
  id: number;
  image: string;
  productName: string;
  newPrice: string;
  oldPrice: string;
  rating: number;
  ratingCount: number;
};

export type timerType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type testimonyCardType = {
  rating: number;
  name: string;
  comment: string;
  image: string;
  job: string;
};

export type footerType = {
  Icon: React.ReactNode | undefined;
  text: Array<string>;
  header: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};
