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




//DEFINING POINTER POSSITION 
const mouse ={
    x: null,
    y: null,
}


//DEFINING PLAYER CLASS
class player {
    constructor(){
        this.X = canvas.width / 2
        this.Y = canvas.height / 2
        this.sizeModifier = 1
        this.width = 100 
        this.height = 70 
        this.rad = 50 * this.sizeModifier
        this.img1 = new Image()
        this.img1.src= "/imgaes/fish1/body_parts_and_spriter_file/icon.png"

    }

    update(){
        const directionX = (this.X -mouse.x)  + this.rad // diference beetwen pointer and player in the X axis
        const directionY = (this.Y -mouse.y ) + this.rad// diference beetwen pointer and player in the Y axis
        
        if(mouse.x !== this.X){ // if possition of mouse and possition of player are  not equal...
             this.X -= directionX / 27 //reduce the diference  in this rate
            }
        
        if(mouse.y !== this.Y){
            this.Y -= directionY / 27
        }
        
    }

    draw(){
        
        ctx.drawImage(this.img1 ,this.X  , this.Y  ,this.width , this.height )
        ctx.strokeRect(this.X,this.Y, this.width , this.height)
        
    }
}

const fish = new player()


//SETING EVENT LISTENER TO UPDATE ON MOUSE CLICK

canvas.addEventListener("mousedown", (e) =>{
    mouse.x = e.x -canvasPosition.left;
    mouse.y = e.y -canvasPosition.top
        
})  


//SETTING UP A TIMER FOR FOOD TO SPAWN 

let foodCounter = 0
let foodFish =[]

const spawnFood = () =>{
    if(foodCounter % 100 === 0 ){
        foodFish.push(new Food())
    }

    for ( let i = 0; i < foodFish.length; i++){
        foodFish[i].update()
        foodFish[i].draw()
    }
        
        for ( let i = 0; i < foodFish.length; i++){
            areColliding(fish, foodFish[i])
            if(foodFish[i].delete === true) foodFish.splice( i, 1)
        }
        
    }
//SETTING UP A TIMER FOR ENEMY TO SPAWN 


let enemieBoats =[]



const spawnEnemy = () =>{
    if(foodCounter % 500 === 0 ){
        console.log("new enemie")
        enemieBoats.push(new Enemy())
    }

    for ( let i = 0; i < enemieBoats.length; i++){
        enemieBoats[i].update()
        enemieBoats[i].draw()
    }

    for ( let i = 0; i < enemieMissiles.length; i++){
        
        enemieMissiles[i].update()
        enemieMissiles[i].draw()
    }
        
}

    


//DEFINING COLLISIONS 

const areColliding = (player, element )=> {
    
    const playerAtLeft = player.X < element.foodX + element.width
    const playerAtRight = player.X + player.width > element.foodX
    const playerAbove = player.Y < element.foodY + element.height
    const playerBelow = player.Y + player.height > element.foodY


    if(playerAtLeft && playerAtRight && playerAbove && playerBelow){
        
        player.width += 2.5
        player.height += 2.5
        element.delete = true
        console.log("collision")
    }
}

    const animate = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height)
        fish.update()
        fish.draw()
        



        foodCounter++
        spawnFood()
        spawnEnemy()

        
        requestAnimationFrame(animate)
    }

    animate()
   
}


