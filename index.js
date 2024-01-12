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

document.querySelector("#Refresh").addEventListener("click", () => {
  shuffleCard();
  flipedCount = 0;
  document.querySelector('#fCount').innerText = flipedCount;
})

document.querySelector("#Refresh").addEventListener(
  "mouseenter", () => {
    document.querySelector("#Refresh i").classList.add("fa-spin");

  }
)

document.querySelector("#Refresh").addEventListener(
  "mouseleave", () => {
    document.querySelector("#Refresh i").classList.remove("fa-spin");

  }
)

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