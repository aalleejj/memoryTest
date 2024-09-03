document.addEventListener('DOMContentLoaded', () => {

    //Cards
    const cards = [
        {
            name: 'jaebeom',
            img: 'images/jaebeom.png'
        },
        {
            name: 'mark',
            img: 'images/mark.png'
        },
        {
            name: 'jackson',
            img: 'images/jackson.png'
        },
        {
            name: 'youngjae',
            img: 'images/youngjae.png'
        },
        {
            name: 'jinyoung',
            img: 'images/jinyoung.png'
        },
        {
            name: 'bambam',
            img: 'images/bambam.png'
        },
        {
            name: 'yugyeom',
            img: 'images/yugyeom.png'
        },
		{
            name: 'got7greenlogo',
            img: 'images/got7greenlogo.png'
        },
          {
            name: 'jaebeom',
            img: 'images/jaebeom.png'
        },
        {
            name: 'mark',
            img: 'images/mark.png'
        },
        {
            name: 'jackson',
            img: 'images/jackson.png'
        },
        {
            name: 'youngjae',
            img: 'images/youngjae.png'
        },
        {
            name: 'jinyoung',
            img: 'images/jinyoung.png'
        },
        {
            name: 'bambam',
            img: 'images/bambam.png'
        },
        {
            name: 'yugyeom',
            img: 'images/yugyeom.png'
        },
		{
            name: 'got7greenlogo',
            img: 'images/got7greenlogo.png'
        }
    ]

    cards.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenID = [];
    var cardsWon = [];

    function createBoard(){
        for(let i = 0; i < cards.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/got7logo.png');
            card.setAttribute('data-id', i);
            card.setAttribute('width', '100px');
            card.setAttribute('height', '100px');
        
            card.addEventListener('click', flipCard);

            grid.appendChild(card);
        }
    }


    function checkForMatch(){
        var cards = document.querySelectorAll('img');

        const optionOneID = cardsChosenID[0];
        const optionTwoID = cardsChosenID[1];

        if(cardsChosen[0] === cardsChosen[1]){
            cards[optionOneID].setAttribute('src', 'images/Empty.png');
            cards[optionTwoID].setAttribute('src', 'images/Empty.png');
            cards[optionOneID].removeEventListener('click', flipCard);
            cards[optionTwoID].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneID].setAttribute('src', 'images/got7logo.png')
            cards[optionTwoID].setAttribute('src', 'images/got7logo.png')
        }
        cardsChosen = [];
        cardsChosenID = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cards.length / 2){
            resultDisplay.textContent = 'Congratulations! you won';
        }
    }
    
    function flipCard(){
        var cardID = this.getAttribute('data-id');
        cardsChosen.push(cards[cardID].name);
        cardsChosenID.push(cardID);
        this.setAttribute('src', cards[cardID].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

})
