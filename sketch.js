var femaleD, maleD;
var report1;
var femaleB1, maleB1, button, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14 ,button15;
var bedroom;
var bookSprite, book;
var john, jenna, greta;
var forensic, doctor, lab, doctorDialogue;
var chatbox;
var sec, sec1;
var gameState = 0;
var femaleDChosen = 0;
var maleDChosen = 0;
var FD1, FD2 , FD3 , FD4 , FD5 , FD6 , FD7;
var maleD1, maleD2, maleD3, maleD4, maleD5, maleD6, maleD7;

function setup(){
    createCanvas(displayWidth,displayHeight);

    femaleD = createSprite(displayWidth/2-350,displayHeight/2);
    femaleD.addImage(femaleDImg);
    femaleD.scale = 0.8;
    femaleD.visible = false;
    
    maleD = createSprite(displayWidth/2+350,displayHeight/2);
    maleD.addImage(maleDImg);
    maleD.scale = 0.8;

    report1 = createSprite(displayWidth/2+300,displayHeight/2-50);
    report1.addImage(report1Img);
    report1.scale = 1.3;
    report1.visible = false;

    femaleB1 = createSprite(displayWidth/2-200, displayHeight/2-350);
    femaleB1.visible = false;
    femaleB1.addImage(femaleB1Img);
    
    maleB1 = createSprite(displayWidth/2+200, displayHeight/2-350);
    maleB1.visible = false;
    maleB1.addImage(maleB1Img);

    bedroom = createSprite(displayWidth/2+100,displayHeight/2-5);
    bedroom.addImage(bedroomImg);
    bedroom.scale = 2;
    bedroom.visible = false;

    bookSprite = createSprite(displayWidth/2+480,displayHeight/2-40,10,50);
    bookSprite.visible = false;

    book = createSprite(displayWidth/2+200,displayHeight/2);
    book.addImage(bookImg);
    book.scale = 1.8;
    book.visible = false;

    button = createSprite(displayWidth/2-600,displayHeight/2+200);
    button.addImage(femaleB1Img);
    button.scale = 0.8;
    button.visible = false;

    john = createSprite(displayWidth/2+150,displayHeight/2-50);
    john.addImage(johnImg);
    john.scale = 1.8;
    john.visible = false;

    forensic = createSprite(displayWidth/2+200,displayHeight/2);
    forensic.addImage(forensicImg);
    forensic.scale = 1;
    forensic.visible = false;

    doctor = createSprite(displayWidth/2+300,displayHeight/2+100);
    doctor.addImage(doctorImg);
    doctor.visible = false;

    lab = createSprite(displayWidth/2,displayHeight/2-60);
    lab.addImage(labImg);
    lab.scale = 2.6;
    lab.visible = false;

    doctorDialogue = createSprite(displayWidth/2-500, displayHeight/2+250);
    doctorDialogue.addImage(doctorDialogueImg);
    doctorDialogue.scale = 0.8
    doctorDialogue.visible = false;

    chatbox = createSprite(displayWidth/2+150, displayHeight/2-200);
    chatbox.addImage(chatboxImg);
    chatbox.visible = false;

    button1 = createSprite(displayWidth/2+200, displayHeight/2);
    button1.addImage(femaleB1Img);
    button1.scale = 0.8;
    button1.visible = false;

    button2 = createSprite(displayWidth/2, displayHeight/2+200);
    button2.addImage(femaleB1Img);
    button2.scale = 0.8;
    button2.visible = false;
    
    button3 = createSprite(displayWidth/2, displayHeight/2+200);
    button3.addImage(femaleB1Img);
    button3.scale = 0.8;
    button3.visible = false;

    button4 = createSprite(displayWidth/2, displayHeight/2+200);
    button4.addImage(femaleB1Img);
    button4.scale = 0.8;
    button4.visible = false;

    button5 = createSprite(displayWidth/2, displayHeight/2+200);
    button5.addImage(femaleB1Img);
    button5.scale = 0.8;
    button5.visible = false;

    button6 = createSprite(displayWidth/2, displayHeight/2+200);
    button6.addImage(femaleB1Img);
    button6.scale = 0.8;
    button6.visible = false;

    button7 = createSprite(displayWidth/2, displayHeight/2+200);
    button7.addImage(femaleB1Img);
    button7.scale = 0.8;
    button7.visible = false;

    button8 = createSprite(displayWidth/2, displayHeight/2+200);
    button8.addImage(femaleB1Img);
    button8.scale = 0.8;
    button8.visible = false;

    button9 = createSprite(displayWidth/2, displayHeight/2+200);
    button9.addImage(femaleB1Img);
    button9.scale = 0.8;
    button9.visible = false;

    button10 = createSprite(displayWidth/2, displayHeight/2+200);
    button10.addImage(femaleB1Img);
    button10.scale = 0.8;
    button10.visible = false;

    button11 = createSprite(displayWidth/2, displayHeight/2+200);
    button11.addImage(femaleB1Img);
    button11.scale = 0.8;
    button11.visible = false;

    button12 = createSprite(displayWidth/2, displayHeight/2+200);
    button12.addImage(femaleB1Img);
    button12.scale = 0.8;
    button12.visible = false;

    button13 = createSprite(displayWidth/2, displayHeight/2+200);
    button13.addImage(femaleB1Img);
    button13.scale = 0.8;
    button13.visible = false;

    button14 = createSprite(displayWidth/2, displayHeight/2+200);
    button14.addImage(femaleB1Img);
    button14.scale = 0.8;
    button14.visible = false;

    button15 = createSprite(displayWidth/2, displayHeight/2+200);
    button15.addImage(femaleB1Img);
    button15.scale = 0.8;
    button15.visible = false;

    FD1 = createSprite(displayWidth/2,displayHeight/2-60);
    FD1.addImage(FD1Img);
    FD1.scale = 0.4;
    FD1.visible = false;

    FD2 = createSprite(displayWidth/2,displayHeight/2-60);
    FD2.addImage(FD2Img);
    FD2.scale = 0.4;
    FD2.visible = false;

    FD3 = createSprite(displayWidth/2,displayHeight/2-60);
    FD3.addImage(FD3Img);
    FD3.scale = 0.4;
    FD3.visible = false;

    FD4 = createSprite(displayWidth/2,displayHeight/2-60);
    FD4.addImage(FD4Img);
    FD4.scale = 0.4;
    FD4.visible = false;

    FD5 = createSprite(displayWidth/2,displayHeight/2-60);
    FD5.addImage(FD5Img);
    FD5.scale = 0.4;
    FD5.visible = false;

    FD6 = createSprite(displayWidth/2,displayHeight/2-60);
    FD6.addImage(FD6Img);
    FD6.scale = 0.4;
    FD6.visible = false;

    FD7 = createSprite(displayWidth/2,displayHeight/2-60);
    FD7.addImage(FD7Img);
    FD7.scale = 0.4;
    FD7.visible = false;

    maleD1 = createSprite(displayWidth/2,displayHeight/2-60);
    maleD1.addImage(maleD1Img);
    maleD1.scale = 0.4;
    maleD1.visible = false;

    maleD2 = createSprite(displayWidth/2,displayHeight/2-60);
    maleD2.addImage(maleD2Img);
    maleD2.scale = 0.4;
    maleD2.visible = false;

    maleD3 = createSprite(displayWidth/2,displayHeight/2-60);
    maleD3.addImage(maleD3Img);
    maleD3.scale = 0.4;
    maleD3.visible = false;

    maleD4 = createSprite(displayWidth/2,displayHeight/2-60);
    maleD4.addImage(maleD4Img);
    maleD4.scale = 0.4;
    maleD4.visible = false;

    maleD5 = createSprite(displayWidth/2,displayHeight/2-60);
    maleD5.addImage(maleD5Img);
    maleD5.scale = 0.4;
    maleD5.visible = false;

    maleD6 = createSprite(displayWidth/2,displayHeight/2-60);
    maleD6.addImage(maleD6Img);
    maleD6.scale = 0.4;
    maleD6.visible = false;

    maleD7 = createSprite(displayWidth/2,displayHeight/2-60);
    maleD7.addImage(maleD7Img);
    maleD7.scale = 0.4;
    maleD7.visible = false;
}

function preload(){
    femaleDImg = loadImage("images/girl2.png");
    maleDImg = loadImage("images/boy.png");
    report1Img = loadImage("images/report1.png");
    femaleB1Img = loadImage("images/click_here.png");
    maleB1Img = loadImage("images/click_here.png");
    bedroomImg = loadImage("images/bed.png");
    bookImg = loadImage("images/book.png");
    johnImg = loadImage("images/mug shots/john.png");
    forensicImg = loadImage("images/forensic.png");
    doctorImg = loadImage("images/doctor.png");
    labImg = loadImage("images/lab.jpg");
    doctorDialogueImg = loadImage("images/doctor_dialogue.png");
    chatboxImg = loadImage("images/chatbox.png");
    FD1Img = loadImage("images/FD1.JPEG");
    FD2Img = loadImage("images/FD2.JPEG");
    FD3Img = loadImage("images/FD3.JPEG");
    FD4Img = loadImage("images/FD4.JPEG");
    FD5Img = loadImage("images/FD5.JPEG");
    FD6Img = loadImage("images/FD6.JPEG");
    FD7Img = loadImage("images/FD7.JPEG");
    maleD1Img = loadImage("images/maleD1.JPEG");
    maleD2Img = loadImage("images/maleD2.JPEG");
    maleD3Img = loadImage("images/maleD3.JPEG");
    maleD4Img = loadImage("images/maleD4.JPEG");
    maleD5Img = loadImage("images/maleD5.JPEG");
    maleD6Img = loadImage("images/maleD6.JPEG");
    maleD7Img = loadImage("images/maleD7.JPEG");
}

function draw(){

    //initial screen
    if(gameState===0){
        background(247, 225, 228);
        fill("black");
        textSize(50);
        text("CHOOSE YOUR CHARACTER", displayWidth/2-350,displayHeight/2-350);
        femaleD.visible = true;

        //when the female sprite is clicked
        if(mousePressedOver(femaleD)){
            report1.visible = true;
            maleD.visible = false;
            background(188, 217, 212);
            femaleB1.visible = true;
            femaleDChosen =1;
            gameState = 1;
        }
        //when male sprite is clicked
        if(mousePressedOver(maleD)){
            report1.x = displayWidth/2-300;
            report1.visible = true;
            femaleD.visible = false;
            background(188, 217, 212);
            maleB1.visible = true;
            maleDChosen = 1;
            gameState = 1; 
        }
    }
    else if(gameState === 1){
        if(mousePressedOver(femaleB1)){
            femaleD.visible = false;
            report1.visible = false;
            femaleB1.visible = false;
            bedroom.visible = true;
            background("black");
            fill("white");
            textSize(28);
            text("Find" +'\n'+ "Ronald's" +'\n'+ "journal" +'\n'+ "in" +'\n'+ "the" +'\n'+ "bedroom." +'\n'+ "Click on it.", displayWidth/10-100,displayHeight/4);
            forensic.visible = false;
            
            gameState = 2;
        }
        if(mousePressedOver(maleB1)){
            maleD.visible = false;
            report1.visible = false;
            maleB1.visible = false;
            bedroom.visible = true;
            background("black");
            fill("white");
            textSize(28);
            text("Find" +'\n'+ "Ronald's" +'\n'+ "journal" +'\n'+ "in" +'\n'+ "the" +'\n'+ "bedroom." +'\n'+ "Click on it.", displayWidth/10-100,displayHeight/4);
            forensic.visible = false;
           
            gameState = 2;
        }
    }
    
    else if(gameState === 2){
        forensic.visible = false;
        if(mousePressedOver(bookSprite)){
            background(231, 214, 222);
            bedroom.visible = false;
            book.visible = true;
            femaleB1.visible = false;
            maleB1.visible = false;
            textSize(55);
            fill("black");
            text("Great job!" +'\n'+ "A new suspect" +'\n'+ "'John Richmond'" +'\n'+ "has been" +'\n'+ "discovered!",displayWidth/2-680,displayHeight/2-200);
            button.visible = true;
            
            gameState = 3;
        }
    }

    else if(gameState === 3 && mousePressedOver(button)){
            background(16, 64, 108);
            john.visible = true;
            button.visible = false;
            textSize(28);
            fill("white");
            strokeWeight(2);
            text("John was" +'\n'+ "Ronald's music" +'\n'+ "producer." +'\n'+ "Click on him" +'\n'+ "to move on.", displayWidth/10-100,displayHeight/4+50);
            
            gameState = 4;
    }

    else if(gameState === 4 && mousePressedOver(john)){
            john.visible = false;
            john.destroy();
            book.visible = false;
            lab.visible = true;
            forensic.visible = true;
            doctorDialogue.visible = true;
            forensic.depth = lab.depth;
            forensic.depth = forensic.depth+1;
            doctorDialogue.depth = forensic.depth;
            doctorDialogue.depth = forensic.depth+1;
            button.visible = true;
            button.x = displayWidth/2-300;
            button.y = displayHeight/2-250;
            button.depth = doctorDialogue.depth;
            button.depth++;
            gameState = 5;
        }

    else if(gameState === 5 && mousePressedOver(button)){
        background(247, 225, 228);
        if(femaleDChosen === 1){
            femaleD.visible = true;
            femaleD.scale = 1.4;
            femaleD.y = displayHeight/2+300;
            forensic.visible = false;
            doctorDialogue.visible = false;
            lab.visible = false;
            chatbox.visible = true;
            chatbox.scale = 3.5;
            button.destroy();
            femaleD.visible = true;
            femaleD.scale = 1.4;
            femaleD.y = displayHeight/2+300;
            textSize(35);
            fill("black");
            text("Jenna Davis was" +'\n'+ "the victim's" +'\n'+ "long known nemesis.", displayWidth/2, displayHeight/2-350);
            textSize(35);
            fill("black");
            text("Yay! New suspect" +'\n'+ "found!!", displayWidth/2, displayHeight/2-200);
        }
        if(maleDChosen === 1){
            maleD.visible = true;
            maleD.scale = 1.4;
            forensic.visible = false;
            doctorDialogue.visible = false;
            lab.visible = false;
            chatbox.visible = true;
            chatbox.scale = 3.5;
            button.destroy();
            maleD.x = displayWidth/2-350;
            maleD.y = displayHeight/2+300;
            textSize(35);
            fill("black");
            text("Jenna Davis was" +'\n'+ "the victim's" +'\n'+ "long known nemesis.", displayWidth/2, displayHeight/2-350);
            textSize(35);
            fill("black");
            text("Yay! New suspect" +'\n'+ "found!!", displayWidth/2, displayHeight/2-200);
        }
        button1.visible = true;
        gameState = 6;
        femaleDChosen = 2;
        maleDChosen = 2;
    }
    else if(gameState === 6 && mousePressedOver(button1)){
        background("white");
        if(femaleDChosen === 2){
            button2.visible = true;           
            FD1.visible = true;
            button2.depth = FD1.depth;
            button2.depth = button2.depth+1;
            if(mousePressedOver(button2)){
                FD2.visible = true;
                button3.visible = true;
            }
            if(mousePressedOver(button3)){
                FD3.visible = true;
                button4.visible = true;
            }
            if(mousePressedOver(button4)){
                FD4.visible = true;
                button5.visible = true;
            }
            if(mousePressedOver(button5)){
                FD5.visible = true;
                button6.visible = true;
            }
            if(mousePressedOver(button6)){
                FD6.visible = true;
                button7.visible = true;
            }
            if(mousePressedOver(button7)){
                FD7.visible = true;
                button8.visible = true;
            }
        }
        if(maleDChosen === 2){
            maleD1.visible = true;
            button9.depth = maleD1.depth;
            button9.depth = button9.depth+1;
            if(mousePressedOver(button9)){
                maleD2.visible = true;
                button10.visible = true;
            }
            if(mousePressedOver(button10)){
                maleD2.visible = true;
                button11.visible = true;
            }
            if(mousePressedOver(button11)){
                maleD3.visible = true;
                button12.visible = true;
            }
            if(mousePressedOver(button12)){
                maleD4.visible = true;
                button13.visible = true; 
            }
            if(mousePressedOver(button13)){
                maleD5.visible = true;
                button14.visible = true;
            }
            if(mousePressedOver(button14)){
                maleD6.visible = true;
                button15.visible = true;
            }
            if(mousePressedOver(button15)){
                maleD7.visible = true;
            }
        }

    }
    drawSprites();

}