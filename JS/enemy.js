
let enemieMissiles = []

class Enemy{
    constructor(){
        this.X = canvas.width  + 100
        this.Y = 100
        this.width = 250
        this.heigth = 150
        this.missileTimer = 0
        this.delete = false
        this.srcArray = ["https://guillecelma.github.io/Project1-HungryShark/imgaes/submarine/pngs/black/large_black_sub.png","https://guillecelma.github.io/Project1-HungryShark/imgaes/submarine/pngs/black_pirate/large_black_pirate_sub.png", "https://guillecelma.github.io/Project1-HungryShark/imgaes/submarine/pngs/yellow_red/large_yellow_sub.png"]
        this.img1 = new Image()
        this.img1.src =this.srcArray[Math.floor(Math.random() * this.srcArray.length)]
    
    }

    update(){
        this.X -= 3
        this.missileTimer += Math.floor(Math.random()* 4)
        if(this.missileTimer > 150){this.fireMissile()
        this.missileTimer = 0}

        if(this.X < (0 -this.width)) this.delete = true
        
    }

    fireMissile(){
        enemieMissiles.push(new Missile(this.X, this.Y))
       
        
    }

    draw(){
        ctx.drawImage(this.img1, this.X, this.Y, this.width, this.heigth)
    }
    
}