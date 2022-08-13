//this object messages contains all the changeble text
const messages = {celestialBodies: ["Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"],
                  currentState: ["annoyed", "sorrowful", "uncertain", "pleased", "empowered", "vibrant"],
                  pieceOfAdvice: ["trust in yourself", "don't wear yellow", "be more grateful", "mind the gap", "be careful"]
}

//chooses randomly what the message will be
let randomCelestialBody = messages.celestialBodies[Math.floor(Math.random() * messages.celestialBodies.length)];
let randomCurrentState = messages.currentState[Math.floor(Math.random() * messages.currentState.length)];
let randomPieceOfAdvice = messages.pieceOfAdvice[Math.floor(Math.random() * messages.pieceOfAdvice.length)];

//function that returns the text with all info
const wordOfTheDay = () => `Today your celestial guidance body is ${randomCelestialBody}, that means you might feel a little ${randomCurrentState}. 
My advice? ${randomPieceOfAdvice}!`

//checks what's the current date
const date = new Date();
//console.log(date.getUTCDate());
//console.log(date.getDay());

// if it's Friday 13h, there's a default message, otherwise is random
if ((date.getUTCDate() === 13) && (date.getDay()===5)) {
    console.log("Today is Friday 13th, it's a bad-luck day. Please listen to me, be extra-careful and avoid leaving the house. It would be better not even get out of bed!")
} else {
    console.log(wordOfTheDay());
}



