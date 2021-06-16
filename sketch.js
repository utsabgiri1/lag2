
var giraffe, bg , bgImg, giraffeImg, banana, bananaImg, dragonfruit, dragonfruitImg, pomengaranite, pomengaraniteImg, score, boibg, boibgImg
var gameState = 0
var score = 0
var bgroup

function preload() {
    bgImg = loadImage("LAG 2.jpg")
    giraffeImg = loadAnimation("like a girrafe.png")
    bananaImg = loadImage("banana.png")
    giraffeleft = loadAnimation("lagls.png")
    boibgImg = loadImage("boi giraffe.jpg")
    noice = loadSound("boi-sound.mp3")
    //noice2 = loadSound("boi-sound.mp3")
}
function fruits(){

    if(frameCount%80 == 0){

        banana = createSprite(round(random(600,1200)),-30)
        banana.velocityY = +(score/10+10)
        banana.addImage(bananaImg)
        banana.scale = .3
        bgroup.add(banana)

    }
}
function setup(){
    createCanvas(windowWidth , windowHeight);
    
    giraffe = createSprite(width/2, height-200)
    giraffe.addAnimation("g",giraffeImg)
    giraffe.scale = 2

    bg = createSprite(width/2, height/2)
    bg.addImage(bgImg)
    bg.scale = 1.2

    bgroup = createGroup()

    edge = createEdgeSprites()
    boibg = createSprite(width/2, height/2)
    boibg.addImage(boibgImg)
    boibg.visible = false
    boibg.visible2 = false

}
    function draw(){
    background("#FFD857");
    

    console.log(windowWidth)

    if(gameState === 0){
        textSize(30)
        fill("black")
        text("Press SPACE To Play :p " ,width/2- 200 , 25 )
    }
        
if(gameState === 1){

    textSize(40)
    fill("black")
    text("Score:" + score, width -400, 100)
    
    if(bgroup.isTouching(giraffe)){
        score += 10
        bgroup.destroyEach()
      
    }

    if(giraffe.x < 785){
        giraffe.changeAnimation("gg",giraffeleft)
    }
    else{
        giraffe.changeAnimation("g",giraffeImg)
    }

    if(bgroup.isTouching(edge[3])){
        noice.play()
        gameState = 2
        
    }

    if(giraffe.isTouching(banana)){
        loadSound(munchy-crunchy-lunch_3VU1M5x4.mp3)
    }
}

    if(gameState === 2){
        noice.play()
        background("player 1" + allPlayers.player1.x , allPlayers.player1.x,200,250 )
        boibg.visible = true

    }
        
    
    if(keyDown("SPACE") && gameState === 0 ){
         gameState  = 1
         bg.visible = false 
         
    }
    if(gameState === 1){
        fruits()
        giraffe.x = mouseX

    }
    


    drawSprites()
    }
    
   






