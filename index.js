const cards = document.querySelectorAll('.card');

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;
let flipedCount = 0;
let timeCound = 20;

function flipCard(e){
  flipedCount += 1;
  document.querySelector('#fCount').innerText = flipedCount;
  let clickedCard = e.target;
  if(clickedCard !== cardOne && !disableDeck){
    clickedCard.classList.add("flip")
    if(!cardOne) {
      return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src, cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg)
  }
}

function matchCards(img1, img2){
  if(img1 === img2){
    matchedCard++;
    if(matchedCard == 8){
      // setTimeout(() => {
      //   return shuffleCard();
      // },1000)
    }
    cardOne.removeEventListener("click", flipCard)
    cardTwo.removeEventListener("click", flipCard)
    cardOne = cardTwo = "";
    return disableDeck=false;
  } 
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  },300)
  setTimeout(() => {
    cardOne.classList.remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
    cardOne = cardTwo = "";
    disableDeck=false;
  },800)
}

function shuffleCard(){
  matchedCard = 0;
  cardOne = cardTwo = "";
  disableDeck=false;
  let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
  arr.sort(() => Math.random() > 0.5 ? 1: -1);

  cards.forEach((c,i) => {
    c.classList.remove("flip");
    let imgTag = c.querySelector("img");
    imgTag.src = `img/img-${arr[i]}.png`;
    c.addEventListener("click", flipCard);
  })
}

shuffleCard()

cards.forEach(c => {
  c.addEventListener("click", flipCard)
})

const F5btn = document.querySelector("#Refresh")

F5btn.addEventListener("click", () => {
  shuffleCard();
  flipedCount = 0;
  document.querySelector('#fCount').innerText = flipedCount;
})
F5btn.addEventListener(
  "mouseenter", () => {
    document.querySelector("#Refresh i").classList.add("fa-spin");

  }
)
F5btn.addEventListener(
  "mouseleave", () => {
    document.querySelector("#Refresh i").classList.remove("fa-spin");

  }
)

const arrowBtn = document.querySelector("#paletteArrow button")

arrowBtn.addEventListener("click", () => {
  if(!arrowBtn.classList.contains("right")){
    document.querySelector("#paletteWrap").style.transform = `translateX(79%)`;
    arrowBtn.classList.add("right");
    } else {
      arrowBtn.classList.remove("right");
      document.querySelector("#paletteWrap").style.transform = `translateX(0)`;
    }
})

const body = document.querySelector('body');
let mainColor = getComputedStyle(body).getPropertyValue('--mainColor').trim();

document.querySelector(".paletteColor:nth-child(1)").addEventListener("click", () => {
  if(!(mainColor === '#63afff')){
    body.style.setProperty('--mainColor', '#63afff');
    mainColor = '#63afff'
  } else {
    body.style.setProperty('--mainColor', '#6563ff');
    mainColor = '#6563ff'
  }
})

document.querySelector(".paletteColor:nth-child(2)").addEventListener("click", () => {
  if(!(mainColor === '#A2D8C0')){
    body.style.setProperty('--mainColor', '#A2D8C0');
    mainColor = '#A2D8C0'
  } else {
    body.style.setProperty('--mainColor', '#6563ff');
    mainColor = '#6563ff'
  }
})

document.querySelector(".paletteColor:nth-child(3)").addEventListener("click", () => {
  if(!(mainColor === '#F2CC7B')){
    body.style.setProperty('--mainColor', '#F2CC7B');
    mainColor = '#F2CC7B'
  } else {
    body.style.setProperty('--mainColor', '#6563ff');
    mainColor = '#6563ff'
  }
})

document.querySelector(".paletteColor:nth-child(4)").addEventListener("click", () => {
  if(!(mainColor === '#FC7E7E')){
    body.style.setProperty('--mainColor', '#FC7E7E');
    mainColor = '#FC7E7E'
  } else {
    body.style.setProperty('--mainColor', '#6563ff');
    mainColor = '#6563ff'
  }
})

document.querySelector(".paletteColor:nth-child(5)").addEventListener("click", () => {
  if(!(mainColor === '#34495e')){
    body.style.setProperty('--mainColor', '#34495e');
    mainColor = '#34495e'
  } else {
    body.style.setProperty('--mainColor', '#6563ff');
    mainColor = '#6563ff'
  }
})

document.querySelector(".paletteColor:nth-child(6)").addEventListener("click", () => {
  if(!(mainColor === '#9ba0a3')){
    body.style.setProperty('--mainColor', '#9ba0a3');
    mainColor = '#9ba0a3'
  } else {
    body.style.setProperty('--mainColor', '#6563ff');
    mainColor = '#6563ff'
  }
})

console.log(`
      ROCKET SCIENCE

            ##
           #  #
          #    #
         #      #
        #   ##   #
       #  #    #  #
       #  #    #   #
     ##     ##     ##
    # #            # #
   #  #            #  #
  #   #            #   #
 #    #            #    #
 #  # #            # #  #
 # #   #          #   # #
 #      # # # # ##      #

          #    #
           #  #
            ##

`)