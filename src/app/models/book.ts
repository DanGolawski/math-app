export interface Book {
  id: number;
  title: string;
}

export interface Chapter {
  number: number;
  title: string;
  firstexercise: number;
  exercisesnumber: number;
  subchapters: Subchapter[];
}

export interface Subchapter {
  id: number;
  number: number;
  title: string;
  chapterid: number;
  firstexercise: number;
  exercisesnumber: number;
}

export interface Exercise {
  imageurl: string;
  videoid: string;
}

export interface RecommendedBook {
  id: number;
  title: string;
  author: string;
  imageurl: string;
}

export interface Video {
  id: number;
  title: string;
  url: string;
}