class Layer{
    constructor(image, speed){

        this.x = 0
        this.y = 0
        this.width = 1920
        this.height = 700
        this.x2 = 1920
        this.gameSpeed = 0
        this.image = image
        this.speed = speed

    }

    update(){
        
        //this.speed = this.gameSpeed * this.speedModifier
        if(this.x <= (-this.width)){
            this.x = this.width + this.x2 - this.speed
        }
        if(this.x2 <= (-this.width)){
            this.x2 = this.width + this.x - this.speed
        }
        this.x = Math.floor(this.x - this.speed)
        this.x2 = Math.floor(this.x2 - this.speed)
        this.gameSpeed ++
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width,this.height)
        ctx.drawImage(this.image, this.x2, this.y, this.width,this.height)
    }
}