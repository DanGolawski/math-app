export const endpoints = {
   books: 'books',
   chapters: (bookId: string) => `books/chapters/${bookId}`,
   recommendedVideos: 'recommended-videos',
   recommendedBooks: 'recommended-books',
   exercises: (subchapterId: number, exerciseNumber: number) => `/exercises/get/${subchapterId}/${exerciseNumber}`,
}