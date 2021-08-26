
class Food {
    constructor (){
        this.name = "food"
        this.size = Math.random() * 90 + 45
        this.width = this.size
        this.height = this.size
        this.X = canvas.width
        this.Y = Math.random() * (canvas.height - this.height)
        this.speed = Math.random() * 5 + 1
        this.distanceToFish = null
        this.delete = false

        this.img = new Image()
        this.srcArray =["https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/fish2/spritesheets/__blue_cartoon_fish_swim.png","https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/fish2/spritesheets/__orange_cartoon_fish_01_swim.png","https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/fish2/spritesheets/__yellow_cartoon_fish_01_swim.png", "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/fish2/spritesheets/__green_cartoon_fish_01_swim.png","https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main//imgaes/fish2/spritesheets/__pink_cartoon_fish_01_swim.png","https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/fish2/spritesheets/__red_cartoon_fish_01_swim.png","https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/fish1/spritesheets/resized2.png", ]
        this.img.src= this.srcArray[Math.floor(Math.random() * this.srcArray.length)]
        this.spriteWidth = 418
        this.spriteHeight = 397
        this.frame = 0
        this.frameX = 0
        this.FrameY =0
        this.maxFrame = 4
        this.gameFrame = 0
        this.slower= 7
}       

update(){
    this.X -= this.speed
    if(this.X < (0 -this.width)) this.delete = true
    this.gameFrame++
}
sprite (){
    if(this.gameFrame % this.slower === 0){
        this.frame++
        if(this.frame >= 12)this.frame = 0 

        if(this.frame === 3 || this.frame === 7 ||this.frame === 11){
            this.frameX = 0
        }else{ this.frameX++}

        if(this.frame < 3)this.FrameY = 0;
        else if(this.frame < 7)this.FrameY = 1;
        else if(this.frame < 11)this.FrameY = 2;
        else this.frameY = 0
    }
}
draw(){
    ctx.drawImage(this.img, this.frameX * this.spriteWidth ,  this.FrameY * this.spriteHeight,this.spriteWidth ,this.spriteHeight, this.X, this.Y, this.width ,this.height)
}

}


