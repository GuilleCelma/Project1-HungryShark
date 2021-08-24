
let enemieMissiles = []

class Enemy{
    constructor(){
        this.X = canvas.width  + 100
        this.Y = 100
        this.width = 200
        this.heigth = 150
        this.missileTimer = 0
        this.delete = false
        this.img1 = new Image()
        this.img1.src ="/imgaes/enemy/pngs/blue.png"
    
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
        console.log("FIRE!")
        
    }

    draw(){
        ctx.drawImage(this.img1, this.X, this.Y, this.width, this.heigth)
    }
    
}