//https://www.youtube.com/watch?v=6rzM_RK2t3c
//https://stackoverflow.com/questions/35660240/how-to-put-p5-js-canvas-in-a-html-div

// html variables
let infoImg=document.getElementById('cardImg');
let infoName=document.getElementById('cardName');
let infoDesc=document.getElementById('cardDescription');

let answerBox=document.getElementById('answerBox');

// image variables
let enemyImgS=[]; 	//array of enemy images, if there are multiple enemies


let enemyImg;let playerImg;
let card1Img;let card2Img;let card3Img;let card4Img;let card5Img;let card6Img;let card7Img;
let card1;let card2;let card3;let card4;let card5;let card6;let card7;

// data variables
let enemeyHp=0;let playerHp=10;
let cards=[];let cardsImg=[];let cardsUsed=[,,,,];

// control visibility
let playerTurn=true;let cardChosen=false;let cardSelected=0;moveSelected=0;
let useBTNx=700;let useBTNy=400;
let endTrnBTNx=700;let endTrnBTNy=460;
let moveUsdY=100;
let undoTip=false;
infoImg.style.visibility='hidden';

const card={
	name:"",image:"",type:"",description:"",cardPos:0,
}

function createCard(NAME,IMAGE,TYPE,DESCRIPTION,X,Y){
	let newCard=Object.create(card);
	newCard.name=NAME;
	newCard.image=IMAGE;
	newCard.type=TYPE;
	newCard.description=DESCRIPTION;
	newCard.x=X;
	newCard.y=Y;
	newCard.used=false;
	cards.push(newCard);
	return newCard;
}

// CREATE CARDS (cards' image path included here)
card1=createCard('test 1',"animallogic_Luna.png",'math','poopyhead',800,370);
card2=createCard('test 2',"pikachu.png",'math','poopyhead',900,370);
card3=createCard('test 3',"animallogic_Luna.png",'math','poopyhead',1000,370);
card4=createCard('test 4',"animallogic_Luna.png",'math','poopyhead',1100,370);
card5=createCard('test 5',"animallogic_Luna.png",'math','poopyhead',1200,370);
card6=createCard('test 6',"animallogic_Luna.png",'math','poopyhead',1300,370);
card7=createCard('test 7',"animallogic_Luna.png",'math','poopyhead',1400,370);
console.log(card1);
// card1Img=card1.image;
// enemyImgS.push(card1.image);
// console.log(enemyImgS);



// IMAGE ARRAYS
	//add images to enemy array (if multiple enemies)
enemyImgS.push('animallogic_Luna.png');

	// cardsImg.push(card1.image);
for(let m=0;m<cards.length;m++){cardsImg.push(cards[m].image)}


// p5
// https://github.com/processing/p5.js/wiki/GLobal-and-instance-mode
let gamep5=new p5(
	(sketch)=>{

		
	sketch.preload=()=>{
	// load images
		enemyImg=sketch.loadImage(`images/${enemyImgS[0]}`);
			// takes image path of enemy based on image array index, change this for multiple enemies

		playerImg=sketch.loadImage('images/pikachu.png');

		card1Img=sketch.loadImage(`images/${cardsImg[0]}`);
		card2Img=sketch.loadImage(`images/${cardsImg[1]}`);
		card3Img=sketch.loadImage(`images/${cardsImg[2]}`);
		card4Img=sketch.loadImage(`images/${cardsImg[3]}`);
		card5Img=sketch.loadImage(`images/${cardsImg[4]}`);
		card6Img=sketch.loadImage(`images/${cardsImg[5]}`);
		card7Img=sketch.loadImage(`images/${cardsImg[6]}`);

		console.log(cardsImg);
	}
	sketch.setup=()=>{
		sketch.createCanvas(1520,525);
		// cnv.parent('p5');
		sketch.background(0);
	}

	sketch.windowResized=()=>{
		sketch.resizeCanvas(windowWidth,windowHeight);
	}


	sketch.draw=()=>{
		// ellipse(500,200,100);
		sketch.background(0);
		sketch.fill(255);

		// enemy hp bar
		sketch.fill(255,0,0);
		sketch.rect(10,10,300,20);
		sketch.fill(0);sketch.text(`hp: ${enemeyHp}`,150,20);sketch.fill(255);

		// enemy area box
		sketch.rect(30,50,300,300);
		sketch.image(enemyImg,30,50,300,300);

		// player hp bar
		sketch.fill(255,0,0);
		sketch.rect(1200,10,300,20);
		sketch.fill(0);sketch.text(`hp: ${playerHp}`,1350,20);sketch.fill(255);


		// player area box
		sketch.rect(1150,50,300,300);
		sketch.image(playerImg,1150,50,300,300);

		if(playerTurn==true){
		// // items box
		// sketch.rect(5,425,250,95);
		// sketch.text('ITEMS',110,420);
		
		// moves used
		// sketch.rect(550,100,400,100);
		// sketch.rect(550,moveUsdY,100,150);
		// sketch.rect(650,moveUsdY,100,150);
		// sketch.rect(750,moveUsdY,100,150);
		// sketch.rect(850,moveUsdY,100,150);
		if(cardsUsed.some(card=>card) && undoTip==true){
			sketch.text('Clicking a card will undo a move and its consecutive ones.',600,275);}else{}
			// https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that

		// 'cards'
		// sketch.rect(800,370,815,150);
		sketch.image(card1Img, card1.x, card1.y, 100,150);
		sketch.image(card2Img, card2.x, card2.y, 100,150);
		sketch.image(card3Img, card3.x, card3.y, 100,150);
		sketch.image(card4Img, card4.x, card4.y, 100,150);
		sketch.image(card5Img, card5.x, card5.y, 100,150);
		sketch.image(card6Img, card6.x, card6.y, 100,150);
		sketch.image(card7Img, card7.x, card7.y, 100,150);
		// 			x     y   width  height

		// use card
		sketch.rect(useBTNx,useBTNy,50);sketch.fill(0);sketch.text('Use',useBTNx+15,useBTNy+30);sketch.fill(255);

		// end turn
		sketch.rect(endTrnBTNx,endTrnBTNy,50);sketch.fill(0);sketch.text('End\nTurn',endTrnBTNx+15,endTrnBTNy+25);sketch.fill(255);


		}


	}



	sketch.mouseClicked=()=>{
		if(playerTurn==true){


			// display card information
			// to change HTML element, p5 needs to be in a div that can access the element
			if(sketch.mouseX>800&&sketch.mouseX<901 && sketch.mouseY>370){ //card 1
				console.log('card 1');
				infoImg.src='./images/'+cardsImg[0];
				infoName.innerHTML=card1.name;
				infoDesc.innerHTML=card1.description;
				cardSelected=1;infoImg.style.visibility='visible';

			}
			if(sketch.mouseX>900&&sketch.mouseX<1001 && sketch.mouseY>370){ //card 2
				console.log('card 2');
				infoImg.src='./images/'+cardsImg[1];
				infoName.innerHTML=card2.name;
				infoDesc.innerHTML=card2.description;
				cardSelected=2;infoImg.style.visibility='visible';
				
			}
			if(sketch.mouseX>1000&&sketch.mouseX<1101 && sketch.mouseY>370){ //card 3
				console.log('card 3');
				infoImg.src='./images/'+cardsImg[2];
				infoName.innerHTML=card3.name;
				infoDesc.innerHTML=card3.description;
				cardSelected=3;infoImg.style.visibility='visible';

			}
			if(sketch.mouseX>1100&&sketch.mouseX<1201 && sketch.mouseY>370){ //card 4
				console.log('card 4');
				infoImg.src='./images/'+cardsImg[3];
				infoName.innerHTML=card4.name;
				infoDesc.innerHTML=card4.description;
				cardSelected=4;infoImg.style.visibility='visible';

			}
			if(sketch.mouseX>1200&&sketch.mouseX<1301 && sketch.mouseY>370){ //card 5
				console.log('card 5');
				infoImg.src='./images/'+cardsImg[4];
				infoName.innerHTML=card5.name;
				infoDesc.innerHTML=card5.description;
				cardSelected=5;infoImg.style.visibility='visible';

			}
			if(sketch.mouseX>1300&&sketch.mouseX<1401 && sketch.mouseY>370){ //card 6
				console.log('card 6');
				infoImg.src='./images/'+cardsImg[5];
				infoName.innerHTML=card6.name;
				infoDesc.innerHTML=card6.description;
				cardSelected=6;infoImg.style.visibility='visible';

			}
			if(sketch.mouseX>1400&&sketch.mouseX<1501 && sketch.mouseY>370){ //card 7
				console.log('card 7');
				infoImg.src='./images/'+cardsImg[6];
				infoName.innerHTML=card7.name;
				infoDesc.innerHTML=card7.description;
				cardSelected=7;infoImg.style.visibility='visible';

			}


		}

			// use card
			if(sketch.mouseX>700&&sketch.mouseX<751 && sketch.mouseY>400&&sketch.mouseY<451){
				// infoImg.style.visibility='visible';
				if(cardsUsed[0]==null || cardsUsed[0]=='test'){
					if(cardSelected==1 && card1.used==false){
					card1.x=550;card1.y=100;
					card1.used=true;undoTip=true;
					cardsUsed.splice(0,1,card1);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==2 && card2.used==false){
					card2.x=550;card2.y=100;
					card2.used=true;undoTip=true;
					cardsUsed.splice(0,1,card2);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==3 && card3.used==false){
					card3.x=550;card3.y=100;
					card3.used=true;undoTip=true;
					cardsUsed.splice(0,1,card3);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==4 && card4.used==false){
					card4.x=550;card4.y=100;
					card4.used=true;undoTip=true;
					cardsUsed.splice(0,1,card4);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==5 && card5.used==false){
					card5.x=550;card5.y=100;
					card5.used=true;undoTip=true;
					cardsUsed.splice(0,1,card5);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==6 && card6.used==false){
					card6.x=550;card6.y=100;
					card6.used=true;undoTip=true;
					cardsUsed.splice(0,1,card6);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==7 && card7.used==false){
					card7.x=550;card7.y=100;
					card7.used=true;undoTip=true;
					cardsUsed.splice(0,1,card7);
					console.log(cards);console.log(cardsUsed);
					}
				}
				else if(cardsUsed[1]==null || cardsUsed[1]=='test' && !(!cardsUsed.hasOwnProperty(0))){
					if(cardSelected==1 && card1.used==false){
					card1.x=650;card1.y=100;
					card1.used=true;
					cardsUsed.splice(1,1,card1);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==2 && card2.used==false){
					card2.x=650;card2.y=100;
					card2.used=true;
					cardsUsed.splice(1,1,card2);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==3 && card3.used==false){
					card3.x=650;card3.y=100;
					card3.used=true;
					cardsUsed.splice(1,1,card3);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==4 && card4.used==false){
					card4.x=650;card4.y=100;
					card4.used=true;
					cardsUsed.splice(1,1,card4);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==5 && card5.used==false){
					card5.x=650;card5.y=100;
					card5.used=true;
					cardsUsed.splice(1,1,card5);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==6 && card6.used==false){
					card6.x=650;card6.y=100;
					card6.used=true;
					cardsUsed.splice(1,1,card6);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==7 && card7.used==false){
					card7.x=650;card7.y=100;
					card7.used=true;
					cardsUsed.splice(1,1,card7);
					console.log(cards);console.log(cardsUsed);
					}
				}
				else if(cardsUsed[2]==null || cardsUsed[2]=='test' && !(!cardsUsed.hasOwnProperty(1))){
					if(cardSelected==1 && card1.used==false){
					card1.x=750;card1.y=100;
					card1.used=true;
					// card1.used=true;
					cardsUsed.splice(2,1,card1);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==2 && card2.used==false){
					card2.x=750;card2.y=100;
					card2.used=true;
					cardsUsed.splice(2,1,card2);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==3 && card3.used==false){
					card3.x=750;card3.y=100;
					card3.used=true;
					cardsUsed.splice(2,1,card3);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==4 && card4.used==false){
					card4.x=750;card4.y=100;
					card4.used=true;
					cardsUsed.splice(2,1,card4);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==5 && card5.used==false){
					card5.x=750;card5.y=100;
					card5.used=true;
					cardsUsed.splice(2,1,card5);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==6 && card6.used==false){
					card6.x=750;card6.y=100;
					card6.used=true;
					cardsUsed.splice(2,1,card6);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==7 && card7.used==false){
					card7.x=750;card7.y=100;
					card7.used=true;
					cardsUsed.splice(2,1,card7);
					console.log(cards);console.log(cardsUsed);
					}
				}
				else if(cardsUsed[3]==null || cardsUsed[3]=='test' && !(!cardsUsed.hasOwnProperty(2))){
					if(cardSelected==1 && card1.used==false){
					card1.x=850;card1.y=100;
					card1.used=true;
					cardsUsed.splice(3,1,card1);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==2 && card2.used==false){
					card2.x=850;card2.y=100;
					card2.used=true;
					cardsUsed.splice(3,1,card2);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==3 && card3.used==false){
					card3.x=850;card3.y=100;
					card3.used=true;
					cardsUsed.splice(3,1,card3);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==4 && card4.used==false){
					card4.x=850;card4.y=100;
					card4.used=true;
					cardsUsed.splice(3,1,card4);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==5 && card5.used==false){
					card5.x=850;card5.y=100;
					card5.used=true;
					cardsUsed.splice(3,1,card5);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==6 && card6.used==false){
					card6.x=850;card6.y=100;
					card6.used=true;
					cardsUsed.splice(3,1,card6);
					console.log(cards);console.log(cardsUsed);
					}
					if(cardSelected==7 && card7.used==false){
					card7.x=850;card7.y=100;
					card7.used=true;
					cardsUsed.splice(3,1,card7);
					console.log(cards);console.log(cardsUsed);
					}
				}

				// if(!cardsUsed.hasOwnProperty(3))	console.log('test')
				// https://stackoverflow.com/questions/62837178/how-to-check-if-an-array-index-is-a-hole-empty
				
			}

			// return cards to position if player wants to undo

			function returnCardsToHand(){
				for(let n1=0;n1<4;n1++){
					if(moveSelected==n1+1){
						for(let n2=n1;n2<cardsUsed.length;n2++){
							if(!(!cardsUsed.hasOwnProperty(n2+1))){

								if(cardsUsed[n2+1]==card1){card1.x=800;card1.y=370;		cardsUsed.splice(n2+1,1,'test');	card1.used=false;}
								if(cardsUsed[n2+1]==card2){card2.x=900;card2.y=370;		cardsUsed.splice(n2+1,1,'test');	card2.used=false;}
								if(cardsUsed[n2+1]==card3){card3.x=1000;card3.y=370;	cardsUsed.splice(n2+1,1,'test');	card3.used=false;}
								if(cardsUsed[n2+1]==card4){card4.x=1100;card4.y=370;	cardsUsed.splice(n2+1,1,'test');	card4.used=false;}
								if(cardsUsed[n2+1]==card5){card5.x=1200;card5.y=370;	cardsUsed.splice(n2+1,1,'test');	card5.used=false;}
								if(cardsUsed[n2+1]==card6){card6.x=1300;card6.y=370;	cardsUsed.splice(n2+1,1,'test');	card6.used=false;}
								if(cardsUsed[n2+1]==card7){card7.x=1400;card7.y=370;	cardsUsed.splice(n2+1,1,'test');	card7.used=false;}
								moveSelected=0;
							}

						}


					}
				}
			}	

			
			if((sketch.mouseX>550&&sketch.mouseX<651 && sketch.mouseY>100&&sketch.mouseY<251)){
				console.log('1st move clicked')
				if(cardsUsed[0]==card1){
					card1.x=800;card1.y=370;	cardsUsed.splice(0,1,'test');	card1.used=false; undoTip=false;	console.log('poop1')
					if(!(!cardsUsed.hasOwnProperty(1))){	moveSelected=1; returnCardsToHand();
				}
				}else 
				if(cardsUsed[0]==card2){
					card2.x=900;card2.y=370;	cardsUsed.splice(0,1,'test');	card2.used=false; undoTip=false;	console.log('poop1')
					if(!(!cardsUsed.hasOwnProperty(1))){	moveSelected=1; returnCardsToHand();
				}
				}else 
				if(cardsUsed[0]==card3){
					card3.x=1000;card3.y=370;	cardsUsed.splice(0,1,'test');	card3.used=false; undoTip=false;	console.log('poop1')
					if(!(!cardsUsed.hasOwnProperty(1))){	moveSelected=1; returnCardsToHand();
				}
				}else 
				if(cardsUsed[0]==card4){
					card4.x=1100;card4.y=370;	cardsUsed.splice(0,1,'test');	card4.used=false; undoTip=false;	console.log('poop1')
					if(!(!cardsUsed.hasOwnProperty(1))){	moveSelected=1; returnCardsToHand();
				}
				}else 
				if(cardsUsed[0]==card5){
					card5.x=1200;card5.y=370;	cardsUsed.splice(0,1,'test');	card5.used=false; undoTip=false;	console.log('poop1')
					if(!(!cardsUsed.hasOwnProperty(1))){	moveSelected=1; returnCardsToHand();
				}
				}else 
				if(cardsUsed[0]==card6){
					card6.x=1300;card6.y=370;	cardsUsed.splice(0,1,'test');	card6.used=false; undoTip=false;	console.log('poop1')
					if(!(!cardsUsed.hasOwnProperty(1))){	moveSelected=1; returnCardsToHand();
				}
				}else 
				if(cardsUsed[0]==card7){
					card7.x=1400;card7.y=370;	cardsUsed.splice(0,1,'test');	card7.used=false; undoTip=false;	console.log('poop1')
					if(!(!cardsUsed.hasOwnProperty(1))){	moveSelected=1; returnCardsToHand();
				}
				}
				console.log(cardsUsed);
			}
			if((sketch.mouseX>650&&sketch.mouseX<751 && sketch.mouseY>100&&sketch.mouseY<251)){
				console.log('2nd move clicked')
				if(cardsUsed[1]==card1){
					card1.x=800;card1.y=370;	cardsUsed.splice(1,1,'test');	card1.used=false; 	console.log('poop2')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=2; returnCardsToHand();
				}
				}else 
				if(cardsUsed[1]==card2){
					card2.x=900;card2.y=370;	cardsUsed.splice(1,1,'test');	card2.used=false; 	console.log('poop2')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=2; returnCardsToHand();
				}
				}else 
				if(cardsUsed[1]==card3){
					card3.x=1000;card3.y=370;	cardsUsed.splice(1,1,'test');	card3.used=false; 	console.log('poop2')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=2; returnCardsToHand();
				}
				}else 
				if(cardsUsed[1]==card4){
					card4.x=1100;card4.y=370;	cardsUsed.splice(1,1,'test');	card4.used=false; 	console.log('poop2')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=2; returnCardsToHand();
				}
				}else 
				if(cardsUsed[1]==card5){
					card5.x=1200;card5.y=370;	cardsUsed.splice(1,1,'test');	card5.used=false; 	console.log('poop2')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=2; returnCardsToHand();
				}
				}else 
				if(cardsUsed[1]==card6){
					card6.x=1300;card6.y=370;	cardsUsed.splice(1,1,'test');	card6.used=false; 	console.log('poop2')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=2; returnCardsToHand();
				}
				}else 
				if(cardsUsed[1]==card7){
					card7.x=1400;card7.y=370;	cardsUsed.splice(1,1,'test');	card7.used=false; 	console.log('poop2')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=2; returnCardsToHand();
				}
				}
				console.log(cardsUsed);
			}
			if((sketch.mouseX>750&&sketch.mouseX<851 && sketch.mouseY>100&&sketch.mouseY<251)){
				console.log('3rd move clicked')
				if(cardsUsed[2]==card1){
					card1.x=800;card1.y=370;	cardsUsed.splice(2,1,'test');	card1.used=false; 	console.log('poop3')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=3; returnCardsToHand();
					}				
				}else 
				if(cardsUsed[2]==card2){
					card2.x=900;card2.y=370;	cardsUsed.splice(2,1,'test');	card2.used=false; 	console.log('poop3')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=3; returnCardsToHand();
					}				
				}else 
				if(cardsUsed[2]==card3){
					card3.x=1000;card3.y=370;	cardsUsed.splice(2,1,'test');	card3.used=false; 	console.log('poop3')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=3; returnCardsToHand();
					}				
				}else 
				if(cardsUsed[2]==card4){
					card4.x=1100;card4.y=370;	cardsUsed.splice(2,1,'test');	card4.used=false; 	console.log('poop3')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=3; returnCardsToHand();
					}				
				}else 
				if(cardsUsed[2]==card5){
					card5.x=1200;card5.y=370;	cardsUsed.splice(2,1,'test');	card5.used=false; 	console.log('poop3')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=3; returnCardsToHand();
					}				
				}else 
				if(cardsUsed[2]==card6){
					card6.x=1300;card6.y=370;	cardsUsed.splice(2,1,'test');	card6.used=false; 	console.log('poop3')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=3; returnCardsToHand();
					}				
				}else 
				if(cardsUsed[2]==card7){
					card7.x=1400;card7.y=370;	cardsUsed.splice(2,1,'test');	card7.used=false; 	console.log('poop3')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=3; returnCardsToHand();
					}
				}
				console.log(cardsUsed);
			}
			if((sketch.mouseX>850&&sketch.mouseX<951 && sketch.mouseY>100&&sketch.mouseY<251)){
				console.log('4th move clicked')
				if(cardsUsed[3]==card1){
					card1.x=800;card1.y=370;	cardsUsed.splice(3,1,'test');	card1.used=false; 	console.log('poop4')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=4; returnCardsToHand();
					}
				}else 
				if(cardsUsed[3]==card2){
					card2.x=900;card2.y=370;	cardsUsed.splice(3,1,'test');	card2.used=false; 	console.log('poop4')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=4; returnCardsToHand();
					}
				}else 
				if(cardsUsed[3]==card3){
					card3.x=1000;card3.y=370;	cardsUsed.splice(3,1,'test');	card3.used=false; 	console.log('poop4')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=4; returnCardsToHand();
					}
				}else 
				if(cardsUsed[3]==card4){
					card4.x=1100;card4.y=370;	cardsUsed.splice(3,1,'test');	card4.used=false; 	console.log('poop4')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=4; returnCardsToHand();
					}
				}else 
				if(cardsUsed[3]==card5){
					card5.x=1200;card5.y=370;	cardsUsed.splice(3,1,'test');	card5.used=false; 	console.log('poop4')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=4; returnCardsToHand();
					}
				}else 
				if(cardsUsed[3]==card6){
					card6.x=1300;card6.y=370;	cardsUsed.splice(3,1,'test');	card6.used=false; 	console.log('poop4')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=4; returnCardsToHand();
					}
				}else 
				if(cardsUsed[3]==card7){
					card7.x=1400;card7.y=370;	cardsUsed.splice(3,1,'test');	card7.used=false; 	console.log('poop4')
					if(!(!cardsUsed.hasOwnProperty(2))){	moveSelected=4; returnCardsToHand();
					}
				}
				console.log(cardsUsed);
			}


			// end turn
			if(sketch.mouseX>700&&sketch.mouseX<751 && sketch.mouseY>460&&sketch.mouseY<511){
				console.log('ended turn');				
				console.log(playerTurn);

				playerTurn=false;
				function clearInfoDiv(){
					infoImg.src='';infoImg.style.visibility='hidden';infoName.innerHTML='';infoDesc.innerHTML='';
				}
				clearInfoDiv();
				function cardQuestion(){

				}
				for(let a=0;a<cardsUsed.length;a++){
					if(cardsUsed[a]!='test' && !(!cardsUsed.hasOwnProperty(a))){	//go thru use cards array for player moves
					// console.log(cardsUsed);
					// console.log(cardsUsed[a].name);

					}
				}
			}


	}
	
},'game-div');