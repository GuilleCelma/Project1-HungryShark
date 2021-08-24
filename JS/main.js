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


const bkg = new Image()
bkg.src = "/imgaes/background/PNG/1_game_background/1_game_background.png"

setTimeout(() =>{ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height)}, 100)


let finishGame = false


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
        console.log("collision")
    }
    if(playerAtLeft && playerAtRight && playerAbove && playerBelow && element.name === "missile"){
        finishGame = true
        console.log("Game Over!")
    }
}

// ANIMATION LOOP FUNCTIONS

    const animate = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height)
        fish.update()
        fish.sprite()
        fish.draw()

        foodCounter++
        spawnFood()
        spawnEnemy()
        
        let myReq = requestAnimationFrame(animate)
        if(finishGame === true ){
            window.cancelAnimationFrame(myReq);
            ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2)
        }
        
    }

    animate()


   
}


