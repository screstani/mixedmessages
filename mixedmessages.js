const celestialBodies = ["Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

const currentState = ["annoyed", "sorrowful", "uncertain", "pleased", "empowered", "vibrant"]

const pieceOfAdvice = ["trust in yourself", "don't wear yellow", "be more grateful", "mind the gap", "be careful"]

let randomCelestialBody = celestialBodies[Math.floor(Math.random() * celestialBodies.length)];
let randomCurrentState = currentState[Math.floor(Math.random() * currentState.length)];
let randomPieceOfAdvice = pieceOfAdvice[Math.floor(Math.random() * pieceOfAdvice.length)];

const wordOfTheDay = () => `Today your celestial guidance body is ${randomCelestialBody}, that means you might feel a little ${randomCurrentState}. 
My advice? ${randomPieceOfAdvice}!`

console.log(wordOfTheDay());
