const messages = {celestialBodies: ["Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"],
                  currentState: ["annoyed", "sorrowful", "uncertain", "pleased", "empowered", "vibrant"],
                  pieceOfAdvice: ["trust in yourself", "don't wear yellow", "be more grateful", "mind the gap", "be careful"]
}
let randomCelestialBody = messages.celestialBodies[Math.floor(Math.random() * messages.celestialBodies.length)];
let randomCurrentState = messages.currentState[Math.floor(Math.random() * messages.currentState.length)];
let randomPieceOfAdvice = messages.pieceOfAdvice[Math.floor(Math.random() * messages.pieceOfAdvice.length)];

const wordOfTheDay = () => `Today your celestial guidance body is ${randomCelestialBody}, that means you might feel a little ${randomCurrentState}. 
My advice? ${randomPieceOfAdvice}!`

console.log(wordOfTheDay());
