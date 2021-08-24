class Missile{
    constructor(x,y){
        this.name = "missile"
        this.X = x + 50
        this.Y = y + 50
        this.width = 70
        this.height = 70
        this.delete = false
        this.img = new Image()
        this.img.src = "/imgaes/bombs 2/PNG/Let/Bomb.png"
    }

    update(){
        this.Y += 1
        if(this.Y > (canvas.height +this.height)) this.delete = true
    }

    draw(){
        ctx.drawImage(this.img,this.X,this.Y,this.width,this.height)
    }
}