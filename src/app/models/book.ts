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
  bookId: string;
  chapterNumber: number;
  number: number;
  name: string;
  numberOfExercises: number;
  firstExerciseNumber: number;
}

export interface Exercise {
  bookId: string;
  chapterNumber: number;
  subchapterNumber: number;
  number: number;
  imageUrl: string;
  videoUrl: string;
  identifier: string;
}

export interface RecommendedBook {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}