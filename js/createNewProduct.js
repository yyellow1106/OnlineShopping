// var tasks = [{
//     "title": "home",
//     "color": "blue",
// },
// {
//     "title": "city",
//     "color": "green",
// }
// ];

//Ref: https://stackoverflow.com/questions/54868328/html-how-to-automatically-create-bootstrap-cards-from-a-js-file

let createTaskCard = () => {

    const getDiv = document.querySelector('.row');

    let createBreak = document.createElement('br');

    let card = document.createElement('div');
    card.className = 'col-12 col-md-6 col-lg-4';
    //card.style = 'width: 18rem';

    let cardClass = document.createElement('div');
    //cardClass.clasName = 'card';
    cardClass.setAttribute('class', 'card');
    cardClass.style = 'width: 18rem';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.setAttribute('class', 'card-title');
    title.setAttribute('innerText', 'Card Title');

    let title1 = document.createElement('h6');
    title1.setAttribute('class', 'card-subtitle mb-2 text-muted');
    //title1.class = 'card-subtitle mb-2 text-muted';
    title1.innerText = 'Card Subtitle';

    let cardTitle = document.createElement('p');
    //cardTitle.class = 'card-text';
    cardTitle.setAttribute('class', 'card-text');
    cardTitle.innerText = 'Some quick example text to build on the card title and make up the bulk of the card';

    let cardLink = document.createElement('a');
    cardLink.setAttribute('href', '#');
    cardLink.setAttribute('class', 'card-link');
    cardLink.setAttribute('innerText', 'Card link');
    cardLink.innerText = 'Card Subtitle';

    let cardLink1 = document.createElement('a');
    cardLink1.setAttribute('href', '#');
    cardLink1.setAttribute('class', 'card-link');
    //cardLink1.setAttribute('innerText', 'Card link');
    cardLink1.innerText = 'Card Subtitle';

    cardBody.appendChild(title);
    cardBody.appendChild(title1);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardLink);
    cardBody.appendChild(cardLink1);

    cardClass.appendChild(cardBody);

    card.appendChild(cardClass);
    card.appendChild(createBreak);
    getDiv.appendChild(card);
    
}

for (i = 0; i < 6; ++i)
{
    createTaskCard();
}
