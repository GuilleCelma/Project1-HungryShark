
class Food {
    constructor (){
        this.size = Math.random() * 70 + 30
        this.width = this.size
        this.height = this.size
        this.foodX = canvas.width
        this.foodY = Math.random() * (canvas.height - this.height)
        this.speed = Math.random() * 5 + 1
        this.distanceToFish = null
        this.delete = false
        this.img = new Image()
        this.img.src= "/imgaes/fish food/PNG/Default size/fishTile_101.png"
}

update(){
    this.foodX -= this.speed
    if(this.foodX < (0 -this.width)) this.delete = true

    
}

draw(){
    ctx.drawImage(this.img, this.foodX, this.foodY, this.width ,this.height , )
}

}