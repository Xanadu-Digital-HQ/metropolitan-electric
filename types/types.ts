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
