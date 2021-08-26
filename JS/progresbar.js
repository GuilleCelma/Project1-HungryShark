const drawBar = (score) =>{

    const icon = new Image()
    icon.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/blue/meter_icon_holder_blue.png"
    const spine = new Image()
    spine.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/icons/xp.png"
    const barStart = new Image()
    barStart.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/blue/meter_bar_holder_left_edge_blue.png"
    const barMiddle = new Image()
    barMiddle.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/blue/meter_bar_holder_center-repeating_blue.png"
    const barEnd = new Image()
    barEnd.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/blue/meter_bar_holder_right_edge_blue.png"
    
    const innerBarStart = new Image()
    innerBarStart.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/blue/meter_bar_left_edge_blue.png"
    const innerBarMiddle = new Image()
    innerBarMiddle.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/blue/meter_bar_center-repeating_blue.png"
    const barText = new Image()
    barText.src = "https://raw.githubusercontent.com/GuilleCelma/Project1-HungryShark/main/imgaes/bar/pngs/blue/meter_text_background_blue.png"

    
    
    
    ctx.fillStyle = "white"
    ctx.drawImage(barStart, 70, 50, 40, 40)
    ctx.drawImage(barText, 70, 88, 80, 20)
    ctx.fillText(`${score} / 30`, 110, 100)
    ctx.drawImage(innerBarStart, 70, 50, 40, 40)
    ctx.drawImage(icon, 50, 50, 60, 60)
    ctx.drawImage(spine, 65, 65, 30, 30)
    ctx.drawImage(barMiddle, 110, 50, 40, 40)
    ctx.drawImage(barMiddle, 150, 50, 40, 40)
    ctx.drawImage(barMiddle, 190, 50, 40, 40)
    ctx.drawImage(barMiddle, 230, 50, 40, 40)
    ctx.drawImage(barEnd, 270, 50, 40, 40)


    switch(score){
        case 1:
        ctx.drawImage(innerBarMiddle, 110, 50, 6.33, 40)
        break;
        case 2:
        ctx.drawImage(innerBarMiddle, 110, 50, 12.66, 40)
        break;
        case 3:
        ctx.drawImage(innerBarMiddle, 110, 50, 19, 40)
        break;
        case 4:
        ctx.drawImage(innerBarMiddle, 110, 50, 25.3, 40)
        break;
        case 5:
        ctx.drawImage(innerBarMiddle, 110, 50, 31.65, 40)
        break;
        case 6:
        ctx.drawImage(innerBarMiddle, 110, 50, 38, 40)
        break;
        case 7:
        ctx.drawImage(innerBarMiddle, 110, 50, 44.3, 40)
        break;
        case 8:
        ctx.drawImage(innerBarMiddle, 110, 50, 50.6, 40)
        break;
        case 9:
        ctx.drawImage(innerBarMiddle, 110, 50, 57, 40)
        break;
        case 10:
        ctx.drawImage(innerBarMiddle, 110, 50, 63.3, 40)
        break;
        case 11:
        ctx.drawImage(innerBarMiddle, 110, 50, 69.63, 40)
        break;
        case 12:
        ctx.drawImage(innerBarMiddle, 110, 50, 76, 40)
        break;
        case 13:
        ctx.drawImage(innerBarMiddle, 110, 50, 82.3, 40)
        break;
        case 14:
        ctx.drawImage(innerBarMiddle, 110, 50, 88.6, 40)
        break;
        case 15:
        ctx.drawImage(innerBarMiddle, 110, 50, 94.9, 40)
        break;
        case 16:
        ctx.drawImage(innerBarMiddle, 110, 50, 101.3, 40)
        break;
        case 17:
        ctx.drawImage(innerBarMiddle, 110, 50, 107.6, 40)
        break;
        case 18:
        ctx.drawImage(innerBarMiddle, 110, 50, 113.94, 40)
        break;
        case 19:
        ctx.drawImage(innerBarMiddle, 110, 50, 120.3, 40)
        break;
        case 20:
        ctx.drawImage(innerBarMiddle, 110, 50, 126.6, 40)
        break;
        case 21:
        ctx.drawImage(innerBarMiddle, 110, 50, 133, 40)
        break;
        case 22:
        ctx.drawImage(innerBarMiddle, 110, 50, 139.3, 40)
        break;
        case 23:
        ctx.drawImage(innerBarMiddle, 110, 50, 145.6, 40)
        break;
        case 24:
        ctx.drawImage(innerBarMiddle, 110, 50, 151.92, 40)
        break;
        case 25:
        ctx.drawImage(innerBarMiddle, 110, 50, 158.3, 40)
        break;
        case 26:
        ctx.drawImage(innerBarMiddle, 110, 50, 164.6, 40)
        break;
        case 27:
        ctx.drawImage(innerBarMiddle, 110, 50, 171, 40)
        break;
        case 28:
        ctx.drawImage(innerBarMiddle, 110, 50, 175, 40)
        break;
        case 29:
        ctx.drawImage(innerBarMiddle, 110, 50, 180, 40)
        break;
        case 30:
        ctx.drawImage(innerBarMiddle, 110, 50, 185, 40)
        break;
        
        
    }


}