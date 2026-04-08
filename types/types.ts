export interface subItems {
  name: string;
  path: string;
}

type normalLink = {
  state: "normal";
  path: string;
};
type subnavLink = {
  state: "subnavLink";
  subItems: subItems[];
};

type footerLink = {
  state: "footer";
  path: string;
};

type button = {
  state: "button";
  path: string;
};

export type Link = {
  name: string;
} & (normalLink | subnavLink | button | footerLink);

export interface Card {
  link: string;
  image: string;
  title: string;
  description: string;
}
export interface Media {
  image: string;
  title: string;
  description: string;
}
export interface NewsItem {
  slug: string;
  image: string;
  title: string;
  description: string;
  date: string;
  body: string;
}

export interface Blog {
  slug: string;
  image: string;
  title: string;
  description: string;
  content: string;
  date: string;
  minutesRead: number;
  tags: string[];
}

export interface BusSpecification {
  label: string;
  value: string;
}
export interface CarSpecification {
  label: string;
  value: string;
}

export interface Bus {
  category: "bus";
  images: string[];
  specification: BusSpecification[];
}
export interface Car {
  category: "car";
  images: string[];
  specification: BusSpecification[];
}

export type vehicle = {
  name: string;
  description: string;
  price: string;
  features: string[];
} & (Bus | Car);
