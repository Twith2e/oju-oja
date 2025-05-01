export type productCardType = {
  id: number;
  image: string;
  productName: string;
  newPrice: string;
  oldPrice: string;
  rating: number;
  ratingCount: number;
  backgroundColor?: boolean;
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
  brand: string;
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

export type CustomRadioProps = {
  count: number;
  text: string;
};

export type Category = {
  category: string;
  image: string;
  count: number;
};

export type PreviewPropsType = {
  image: string[];
  title: string;
  rating: number;
  ratingCount: number;
  stock: number;
  price: number;
  oldPrice: number;
  discountPercentage: number;
  description: string;
  id: number;
  close: () => void;
};
