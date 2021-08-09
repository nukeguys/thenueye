export interface Post {
  id: string;
  title: string;
  description: string;
  img: string;
  topic: Topic;
  authors: Author[];
  publishedOn: string;
}

export interface Topic {
  id: string;
  name: string;
}

export interface Author {
  id: string;
  name: string;
}
