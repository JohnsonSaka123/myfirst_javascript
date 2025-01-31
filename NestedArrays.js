const library = {
  name: "City Library",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genres: ["Fiction", "Classic"]
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genres: ["Fiction", "Classic", "Drama"]
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genres: ["Dystopian", "Political Fiction"]
    }
  ],
  getBooksByGenre : function(genre){
    const booksByGenre = this.books.filter(
        book => book.genres.includes(genre)
    );
    return booksByGenre.map(book => book.title)
  }
};


library.books.push({
  title : "Moby Dick",
  author : "Herman Melvile",
  year : 1851,
  genres : ["Adventure" , "Classic"]
});

library.books[2].title = "1950";
//console.log(library.books[2]);

library.books[1].genres[2] = "To kill a Mockingbird" ;

//console.log(library.books[1]);

library.books.forEach(function(book){
  console.log(book.title);
})


console.log(library.getBooksByGenre("Fiction"));


