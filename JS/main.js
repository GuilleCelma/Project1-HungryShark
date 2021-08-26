//DEFINNING START BUTTON 


const startButton = document.querySelector("#start")

startButton.addEventListener("click", () =>{
    startGame()
    startButton.style.backgroundColor = "rgb(3, 230, 255)"
    startButton.style.color = "black"
    startButton.textContent = "Play Again"
})


//SETING UP CANVAS
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled = false
canvas.width = 900
canvas.height = 700

let canvasPosition = canvas.getBoundingClientRect()

let enemieBoats =[]
let finishGame = false
let score = 0
let foodCounter = 0
let foodFish =[]
let bubles =[]
let intervalId= undefined


//START GAME FUNCTION ////////////////////////////////////////////////////////


const startGame = () =>{
    console.log("game running")
    console.log(finishGame)
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")
    
    const fish = new player()
    canvas.width = 900
    canvas.height = 700

    const explosion = new Audio()
    explosion.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/audio/35462__jobro__explosion-5.wav"
    const bite = new Audio()
    bite.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/audio/353067__jofae__bite-cartoon-style.mp3"

    const winSound = new Audio()
    winSound.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/audio/527650__fupicat__winsquare.wav"
    
    const startSound = new Audio()
    startSound.src = "/audio/243020__plasterbrain__game-start.ogg"
    

    startSound.play()

    const reset = ()=>{
        
        finishGame = false
        score = 0
        foodCounter = 0
        foodFish = []
        enemieBoats = []
        bubles = []
        enemieMissiles = []
        
    }
    reset()
    
   
    
 //CREATING BACKGROUND   

const backgroundLayer1  = new Image()
backgroundLayer1.src = "https://guillecelma.github.io/Project1-HungryShark/imgaes/background/PNG/2_game_background/layers/1.png"
const layer1 = new Layer(backgroundLayer1, 1)

const backgroundLayer2 = new Image()
backgroundLayer2.src = "https://guillecelma.github.io/Project1-HungryShark/imgaes/background/PNG/4_game_background/layers/3.png"
const layer2 = new Layer(backgroundLayer2, 2)

const backgroundLayer3 = new Image()
backgroundLayer3.src = "https://guillecelma.github.io/Project1-HungryShark/imgaes/background/PNG/2_game_background/layers/5.png"
const layer3 = new Layer(backgroundLayer3, 2.5)

const backgroundLayer4 = new Image()
backgroundLayer4.src = "https://guillecelma.github.io/Project1-HungryShark/imgaes/background/PNG/4_game_background/layers/4.png"
const layer4 = new Layer(backgroundLayer4,1,5 )


const gameOverImg = new Image()
gameOverImg.src = "https://guillecelma.github.io/Project1-HungryShark/imgaes/Gamestatus/output-onlinepngtools (7).png"

const win = new Image()
win.src = "https://guillecelma.github.io/Project1-HungryShark/imgaes/Gamestatus/youwin.png"

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

////////////////////////////////////////////////////////////////////////////////////////////////
//HANDLE PAUSE AND RESTART 

//let finishGame = false
//let score = 0

const handleStatus = () =>{


    if(foodCounter % 50 === 0){

        if(score === 30){
            finishGame = true,
            winSound.play(),
            setTimeout(() =>{ctx.drawImage(win,0,0, canvas.width,canvas.height)}, 500)

        }
    }  

    

}

////////////////////////////////////////////////////////////////////////////////////////////////////////

//SETTING UP A TIMER FOR FOOD TO SPAWN 

//let foodCounter = 0
//let foodFish =[]

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

//let enemieBoats =[]

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

//let bubles =[]

const spawnEntities = () =>{
    if(foodCounter % 50 === 0 ){
        bubles.push(new Bubble())
        
    }

    for ( let i = 0; i < bubles.length; i++){
        bubles[i].update()
        bubles[i].draw()
        
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
        bite.play()
        element.delete = true
        score++

        console.log("collision")
    }
    if(playerAtLeft && playerAtRight && playerAbove && playerBelow && element.name === "missile"){
        element.drawExplosion()
        explosion.play()
        setTimeout(() => {
            ctx.fillStyle = "black"
            ctx.fillRect(0,0,canvas.width,canvas.height)
            ctx.drawImage(gameOverImg,0,0, canvas.width,canvas.height)
        }, 500)
        finishGame = true
        //mainTheme.pause()
        console.log("Game Over!")
    }
}

// ANIMATION LOOP FUNCTIONS

    const animate = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
       

        //animate background
        animateBackGround()
        drawBar(score)
        fish.draw()
        fish.update()
        fish.sprite()
        
        spawnEntities()
        foodCounter++
        spawnFood()
        spawnEnemy()
        handleStatus()
        

        intervalId = requestAnimationFrame(animate)
        if(finishGame === true) cancelAnimationFrame(intervalId)
        
        
    }

    animate()

   
}


