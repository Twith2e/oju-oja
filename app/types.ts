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
