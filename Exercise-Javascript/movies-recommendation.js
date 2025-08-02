function suggestMovie(Mood) {
  let isHappy = Mood === "happy"
  let isSad = Mood === "Sad"
  let isBored = Mood === "Bored"
  let isChill = Mood === "Chill"

  if (isHappy) {
    console.log("you are happy now watch movie: life is beautiful")
  } else if (isSad) {
    console.log("you are sad now watch Jumanji")
  } else if (isBored) {
    console.log("you are bored now watch Attack On Tiatn ")
  } else if (isChill){
    console.log(" You are chill now watch Titanic")
  } else {
    console.log("i'm not not suggesting you any movie go to hell")
  }
  
  
}
suggestMovie("happy");
suggestMovie("Sad");
suggestMovie("Bored")
suggestMovie("Chill")