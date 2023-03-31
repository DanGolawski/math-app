export interface BookShort {
  id: string;
  title: string;
}

export interface Book {
  name: string;
  id: string;
  chapters: Chapter[];
}

export interface Chapter {
  number: number;
  name: string;
  subchapters: Subchapter[];
}

export interface Subchapter {
  id: number;
  bookid: string;
  chapternumber: number;
  number: number;
  name: string;
  numberofexercises: number;
  firstexercisenumber: number;
}

export interface Exercise {
  bookid: string;
  chapternumber: number;
  subchapternumber: number;
  number: number;
  imageurl: string;
  videourl: string;
  identifier: string;
}

export interface RecommendedBook {
  id: number;
  title: string;
  author: string;
  imageurl: string;
}