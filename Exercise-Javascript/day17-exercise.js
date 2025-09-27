class NumberStream {
  constructor(limit) {
    this.limit = limit
  }

  [Symbol.asyncIterator]() {
    let count = 1
    let limit = this.limit
    return {
      async next() {
        if (count <= limit) {
          await new Promise(r => setTimeout(r , 800))
          return { value: count++, done: false }
        } 
        return {done: true}
      }
    };
  }
};


(async () => {
  for await (const num of new NumberStream(3)) {
    console.log(num)
  }
})()


//Project 

class Article {
  // 🔹 Properties
  #title
  #author
  #content

  // 🔹 Constructor
  constructor(title, author, content) { 
    this.#title = title
    this.#author = author
    this.#content = content
   }

  // 🔹 Getters
  getTitle() { return this.#title }
  getAuthor() { return this.#author }
  getContent() { return this.#content }
}

class NewsFeed {
  // 🔹 Private field
  #articles = []

  // 🔹 Method to add articles
  addArticle(article) { 
    this.#articles.push(article)
   }

  // 🔹 Async Iterator
  [Symbol.asyncIterator]() {
   let index = 0
   let news = this.#articles

   return{
    async next(){
      if(index < news.length){
        await new Promise(r => setTimeout(r , 500))
        return {value: news[index++] , done: false}
      } 
      return {done: true}
    }
   };
  }
};

(async () => {
  const feed = new NewsFeed()
  feed.addArticle(new Article("AI Updates", "John", "AI is booming..."))
  feed.addArticle(new Article("SpaceX Launch", "Elon", "Rocket launched successfully."))
  
  for await(const article of feed) {
    console.log(article.getTitle(), "-", article.getAuthor())
  }
  
})()


class Song {
  #title
  #artist
  #duration

  constructor(title, artist, duration){
    this.#title = title
    this.#artist = artist 
    this.#duration = duration
  }

  getTitle(){ return this.#title }
  getArtist(){ return this.#artist }
  getDuration(){ return this.#duration }
}

class Playlist {
  #songs = []

  addSongs(song){ this.#songs.push(song) }

  getTotalDuration(){
    return this.#songs.reduce((total, song) => total + song.getDuration(), 0)
  }

  // [Symbol.asyncIterator](){
  //   let index = 0
  //   const songs = this.#songs

  //   return {
  //     async next(){
  //       if(index < songs.length){
  //         await new Promise(r => setTimeout(r, songs[index].getDuration() * 200)) 
  //         return { value: songs[index++], done: false }
  //       }
  //       return { done: true }
  //     }
  //   }
  // }

  async *[Symbol.asyncIterator](){
    
      for (const song of this.#songs) {
        await new Promise(r => setTimeout(r,song.getDuration() * 200))
        yield song
      }
    }
  }


(async () => {
  const playlist = new Playlist()
playlist.addSongs(new Song("Song A", "Artist A", 180))
playlist.addSongs(new Song("Song B", "Artist B", 240))

console.log("Total Duration:", playlist.getTotalDuration(), "seconds")

for await(const song of playlist) {
  console.log(`${song.getTitle()} by ${song.getArtist()}`)
}
})();
