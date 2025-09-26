// class Book{
//   #title
//   #author
//   #year

//   constructor(title , author , year){
//     this.title = title
//     this.#author = author
//     this.#year = year
//   }

//   getTitle(){
//     return this.#title
//   }

//   getAuthor(){
//     return this.#author
//   }

//   getYear(){
//     return this.#year
//   }
// }

// class LIbrary{
// #book = []

// addBook(book){
//   this.#book.push(book)
// }

// getAllBook(){
//   return this.#book
// }

// *[Symbol.iterator](){
//  for (const book of this.#book) {
//   yield book
//  }
// }
//   *getBookAfter(year){
//     for (let book of this.#book) {
//       if(book.getYear() > year){
//         yield book
//       }
//     }
//   }
// }



// // Create library
// const library = new LIbrary()

// // Add books
// library.addBook(new Book("The Alchemist", "Paulo Coelho", 1988))
// library.addBook(new Book("Clean Code", "Robert C. Martin", 2008))
// library.addBook(new Book("Atomic Habits", "James Clear", 2018))
// library.addBook(new Book("Deep Work", "Cal Newport", 2016))

// // 🔹 Iterate all books (default iterator)
// console.log("All Books:")
// for (let book of library) {
//   console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()})`)
// }

// // 🔹 Iterate filtered books (after 2010)
// console.log("\nBooks After 2010:")
// for (let book of library.getBookAfter(2010)) {
//   console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()})`)
// }



// class Song {
//   // 🔹 Properties
//   #title
//   #artist
//   #duration

//   // 🔹 Constructor
//   constructor(title, artist, duration){
//     this.#title = title
//     this.#artist = artist
//     this.#duration = duration
//   }

//   // 🔹 Getters
//   getTitle() {return this.#title}
//   getArtist() { return this.#artist }
//   getDuration() {return this.#duration}
// }

// class Playlist {
//   // 🔹 Private Field
//   #songs = []

//   // 🔹 Methods
//   addSong(song){
//     this.#songs.push(song)
//   }              // Add new song
//   getAllSongs() {
//     return this.#songs
//   }             // Return all songs

//   // 🔹 Iterator (Default Iteration)
//    *[Symbol.iterator](){
//     for (const song of this.#songs) {
//       yield song
//     }
//   }   

//   // [Symbol.iterator](){
//   //   let index = 0
//   //   let song = this.#songs    // i did it in both generator and iterator

//   //   return{
//   //     next() {
//   //       if(index < song.length){
//   //       return  { value: song[index++] , done: false}
//   //       }
//   //       else{
//   //         return {done: true}
//   //       }
//   //     }
//   //   }
//   // }

//   // 🔹 Generator Method
//   *getLongSongs(minDuration){
//     for (const song of this.#songs) {
//       if(song.getDuration() < minDuration){
//         yield song
//       }
//     }
//   } // Iterate only songs > minDuration

// //   getLongSongs(minDuration){
// //     let duration = minDuration
// //     let index = 0

// //     return {
// //       [Symbol.iterator](){      // this also i did both iterator and generator
// //         return{
// //           next(){
// //             if(index < duration.length){
// //               return {value: duration[index++] , done: false}
// //             } else{
// //               {done: true}
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
//  }

// const Songs = new Playlist()

// // Add books
// Songs.addSong(new Song("perfect" , "ed sheeran" , 4))
// Songs.addSong(new Song("baby" , "justin beiber" , 2))
// Songs.addSong(new Song("Die with Smile" , "Bruno Mars" , 5))
// Songs.addSong(new Song("Blue" , "Nahid pasha" , 3))

// for (const songs of Songs) {
//   console.log(`${songs.getTitle()} ${songs.getArtist()} ${songs.getDuration()}`)
// }


// for (const songs of Songs.getLongSongs(3)) {
//   console.log(`${songs.getTitle()} ${songs.getArtist()} ${songs.getDuration()}`)
// }


class Movie{
  #title 
  #director
  #rating

  constructor(title , director , rating){
    this.#title = title
    this.#director = director
    this.#rating = rating
  }

  getTitle(){return this.#title}
  getDirector(){return this.#director}
  getRating(){return this.#rating}
  }

  class MovieCollection{
    #movies = []

    addMovie(movie){
      this.#movies.push(movie)
    }

    getAllMovies(){return this.#movies}

    [Symbol.iterator](){
      let movie = this.#movies
      let index = 0

      return{
        next(){
          if(index < movie.length){
            return {value: movie[index++] , done:false}
          } else{
            return{done: true}
          }
        }
      }
    }

    *getTopRated(minRating){
      for (const movie of this.#movies) {
        if( movie.getRating() >= minRating ){
           yield movie
        } 
      }
    }

  //   getMoviesByDirector(director){
  //     let directors = this.#movies.filter(movie => movie.getDirector() === director)
  //     let index = 0

  //     return {
  //     [Symbol.iterator]() {
  //       return {
  //         next() {
  //           if (index < directors.length) {
  //             return { value: directors[index++], done: false }
  //           } else {
  //             return { done: true }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
 *getMoviesByDirector(director){
  for (const movie of this.#movies) {
    if(movie.getDirector() === director){
      yield movie
    }
  }
 }

}
    

  const collection = new MovieCollection()

collection.addMovie(new Movie("Inception", "Christopher Nolan", 9))
collection.addMovie(new Movie("Titanic", "James Cameron", 8))
collection.addMovie(new Movie("Avatar", "James Cameron", 7))
collection.addMovie(new Movie("Interstellar", "Christopher Nolan", 10))

// Default iteration
for (const movie of collection) {
  console.log(movie.getTitle())
}

// Top-rated movies
for (const movie of collection.getTopRated(8)) {
  console.log("⭐", movie.getTitle())
}

// Movies by director
for (const movie of collection.getMoviesByDirector("James Cameron")) {
  console.log("🎬", movie.getTitle())
}

