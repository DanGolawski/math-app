export const endpoints = {
   books: 'books',
   chapters: (bookId: string) => `chapters?bookId=${bookId}`,
   recommendedVideos: 'recommended-videos',
   recommendedBooks: 'recommended-books',
   exercises: 'exercises',
}