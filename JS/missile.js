class Missile{
    constructor(x,y){
        this.name = "missile"
        this.X = x + 50
        this.Y = y + 50
        this.width = 70
        this.height = 70
        this.delete = false

        this.img = new Image()
        this.img.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bombs%202/PNG/Let/Bomb.png"

        this.img2 = new Image()
        this.img2.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/explosion/fireballs_explosion/meteor_side_medium/imgs_explode/img_26.png"
    }

    update(){
        this.Y += 1
        if(this.Y -this.height === (canvas.height )) {this.drawExplosion(),this.delete = true}
    }

    draw(){
        ctx.drawImage(this.img,this.X,this.Y,this.width,this.height)
    }
    drawExplosion(){
        ctx.drawImage(this.img2, this.X-110, this.Y-75, 300, 300)
    }
}