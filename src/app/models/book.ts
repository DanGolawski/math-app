export interface Book {
  name: string,
  id: string,
  chapters: Chapter[]
}

export interface Chapter {
  number: number, 
  name: string,
  subchapters: Subchapter[]
}

export interface Subchapter {
  number: number,
  name: string
}

export interface Exercise {
  id?: number;
  name: string,
  url: string
}