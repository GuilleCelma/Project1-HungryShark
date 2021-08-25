class Bubble{
    constructor(){
    this.x= Math.random() * 900
    this.y= 700
    this.size = Math.random()*10
    this.width = 10 * this.size
    this.height= 12 * this.size
    this.delete = false
    this.img = new Image()
    this.img.src="/imgaes/Bubbles/bubble_pop_underwater/bubble_pop_under_water_01.png"
    }

    update(){
        this.y -= 3
        if(this.y > canvas.height + this.height)this.delete = true
    }
    
    draw(){
        
        
        ctx.drawImage(this.img, this.x,this.y,this.width, this.height)
    }
}