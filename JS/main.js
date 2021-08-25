//DEFINNING START BUTTON 
const startButton = document.querySelector("#start")

startButton.addEventListener("click", () =>{
    startGame()
})

//SETING UP CANVAS
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 900
canvas.height = 700

let canvasPosition = canvas.getBoundingClientRect()

//START GAME FUNCTION 

const startGame = () =>{
console.log("game running")




//CREATING BACKGROUND 


const backgroundLayer1  = new Image()
backgroundLayer1.src = "/imgaes/background/PNG/2_game_background/layers/1.png"
const layer1 = new Layer(backgroundLayer1, 1)

const backgroundLayer2 = new Image()
backgroundLayer2.src = "/imgaes/background/PNG/4_game_background/layers/3.png"
const layer2 = new Layer(backgroundLayer2, 2)

const backgroundLayer3 = new Image()
backgroundLayer3.src = "/imgaes/background/PNG/2_game_background/layers/5.png"
const layer3 = new Layer(backgroundLayer3, 2.5)

const backgroundLayer4 = new Image()
backgroundLayer4.src = "/imgaes/background/PNG/4_game_background/layers/4.png"
const layer4 = new Layer(backgroundLayer4,1,5 )


const animateBackGround = () =>{
    layer1.update()
    layer1.draw()
    layer4.update()
    layer4.draw()
    layer2.update()
    layer2.draw()
    layer3.update()
    layer3.draw()

}


/*const bkg = new Image()


bkg.src = "/imgaes/background/PNG/1_game_background/1_game_background.png"

setTimeout(() =>{ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height)}, 100)*/


let finishGame = false
let score = 0



const fish = new player() //DECLARING NEW PLAYER
////////////////////////////////////////////////////////////////////////////////////////////////////////

//SETTING UP A TIMER FOR FOOD TO SPAWN 

let foodCounter = 0
let foodFish =[]

const spawnFood = () =>{
    
    if(foodCounter % 100 === 0 ){
        foodFish.push(new Food())
    }

    for ( let i = 0; i < foodFish.length; i++){
        foodFish[i].update()
        foodFish[i].sprite()
        foodFish[i].draw()

    }
        
        for ( let i = 0; i < foodFish.length; i++){
            areColliding(fish, foodFish[i])
            if(foodFish[i].delete === true) foodFish.splice( i, 1)
        }
        
    }
////////////////////////////////////////////////////////////////////////////////////

//SETTING UP A TIMER FOR ENEMY TO SPAWN 

let enemieBoats =[]

const spawnEnemy = () =>{
    if(foodCounter % 1000 === 0 ){
        
        enemieBoats.push(new Enemy())
    }

    for ( let i = 0; i < enemieBoats.length; i++){
        enemieBoats[i].update()
        enemieBoats[i].draw()
        if(enemieBoats[i].delete === true) enemieBoats.splice( i, 1)
    }

    for ( let i = 0; i < enemieMissiles.length; i++){
        
        enemieMissiles[i].update()
        enemieMissiles[i].draw()
        areColliding(fish, enemieMissiles[i])
        if(enemieMissiles[i].delete === true) enemieMissiles.splice( i, 1)
    }
}
 
/////////////////////////////////////////////////////////////////

//SETTING UP A TIMER FOR ENTITIES TO SPAWN 

let bubles =[]

const spawnEntities = () =>{
    if(foodCounter % 50 === 0 ){
        bubles.push(new Bubble())
        
    }

    for ( let i = 0; i < bubles.length; i++){
        bubles[i].update()
        bubles[i].draw()
        console.log(bubles.y)
        if(bubles[i].delete === true) enemieBoats.splice( i, 1)
    }
}
 
/////////////////////////////////////////////////////////////////

//DEFINING COLLISIONS 

const areColliding = (player, element )=> {
    
    const playerAtLeft = player.X < element.X + element.width
    const playerAtRight = player.X + player.width > element.X
    const playerAbove = player.Y < element.Y + element.height
    const playerBelow = player.Y + player.height > element.Y
    const eName = element.name
    

    if(playerAtLeft && playerAtRight && playerAbove && playerBelow && element.name === "food"){
    
        player.width += 2.5
        player.height += 2.5
        element.delete = true
        score++

        console.log("collision")
    }
    if(playerAtLeft && playerAtRight && playerAbove && playerBelow && element.name === "missile"){
        element.drawExplosion()
        finishGame = true
        console.log("Game Over!")
    }
}

// ANIMATION LOOP FUNCTIONS

    const animate = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height)

        //animate background
        animateBackGround()
        spawnEntities()
        fish.update()
        fish.sprite()
        fish.draw()

        foodCounter++
        spawnFood()
        spawnEnemy()
        
        ctx.fillText(`${score} / 30`, 100, 100)
        let myReq = requestAnimationFrame(animate)
        if(score === 30){console.log("you win!"),finishGame = true}
        if(finishGame === true ){
            window.cancelAnimationFrame(myReq);
            ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2)
        }
        
    }

    animate()


   
}


