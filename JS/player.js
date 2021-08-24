//DEFINING POINTER POSSITION 
const mouse ={
    x: null,
    y: null,
}
//SETING EVENT LISTENER TO UPDATE ON MOUSE CLICK

canvas.addEventListener("mousedown", (e) =>{
    mouse.x = e.x -canvasPosition.left;
    mouse.y = e.y -canvasPosition.top
        
})  

////////////////////////////////////////////////////////////


//DEFINING PLAYER CLASS///////////////////////////////////////////////////////////////////////////////
class player {
    constructor(){
        this.X = canvas.width / 2
        this.Y = canvas.height / 2
        this.sizeModifier = 1
        this.width = 100
        this.height = 70
        this.rad = 50 * this.sizeModifier


        this.img1 = new Image()
        this.img1.src= "/imgaes/shark/pngs/animations/swim-snapping/"
        this.spriteWidth = 1671
        this.spriteHeight = 860
        this.frame = 0
        this.frameX = 0
        this.FrameY =0
        this.maxFrame = 0
        this.gameFrame = 0
        this.staggerFrames = 10
       

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
        this.gameFrame++
    }

    sprite (){

        if(this.gameFrame % this.staggerFrames === 0){
            this.frame++
            if(this.frame >= 16)this.frame = 0 
    
            if(this.frame === 3 || this.frame === 7 ||this.frame === 11 || this.frame === 15){
                this.frameX = 0
            }else{ this.frameX++}
    
            if(this.frame < 3)this.FrameY = 0;
            else if(this.frame < 7)this.FrameY = 1;
            else if(this.frame < 11)this.FrameY = 2;
            else if(this.frame < 15)this.FrameY = 3;

            else this.frameY = 0
        }
    }
    draw(){
        
        ctx.drawImage(this.img1, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth , this.spriteHeight, this.X, this.Y, this.width, this.height)
        
    }
}
