let dogsArray = ["Bull Dog", "Boxer", "Frenchie", "Lab"];

function likesToBark(name){
  console.log("a " +name + " likes to bark!")
}

function likesToLick(name){
console.log("a " +name + " likes to lick!")
}

// dogsArray.forEach(likesToBark)
// dogsArray.forEach(likesToLick)

dogsArray.forEach(function(name){
  console.log("does your " +name + " like to bark?")
})