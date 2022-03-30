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


var cosmetics = ['./../cosmetics-images/1.jpg', './../cosmetics-images/2.jpg', './../cosmetics-images/3.jpg', 
                './../cosmetics-images/4.jpg', './../cosmetics-images/5.jpg', './../cosmetics-images/6.jpg'];

let displayProducts = (c) =>{

    const getDiv =  document.querySelector('.row');

    let cardCol = document.createElement('div');
    cardCol.className = 'col-lg-4';

    let card= document.createElement('div');
    card.className = 'card'; 
    //card.style = 'width: 13rem';
   // card.style.height = "100%";
    
    let insertImage = document.createElement('img');
    insertImage.src = c; //'./../images/yellow-icon.png';
    insertImage.setAttribute('alt', '');
    insertImage.classList.add("card-img-top");
    insertImage.classList.add("product-card-image");

    let createCardBody = document.createElement('div');
    createCardBody.className = 'card-body';

    let content = document.createElement('p');
    content.className = 'card-text';
    content.innerText = "Tarte 30% off sale✨✨";

    let link = document.createElement('a');
    link.setAttribute('href', 'https://www.facebook.com/yellow1106');
    link.className = 'btn btn-warning stretched-link';
    link.innerText = 'Explore';
    link.setAttribute('target', '_blank');

    let createBreak = document.createElement('br');

    createCardBody.appendChild(content);
    createCardBody.appendChild(link);
    card.appendChild(insertImage);
    card.appendChild(createCardBody);
    cardCol.appendChild(card);
    cardCol.appendChild(createBreak);

    getDiv.appendChild(cardCol);
}

// let createTaskCard = () => {

//     const getDiv = document.querySelector('.row');

//     let createBreak = document.createElement('br');

//     let card = document.createElement('div');
//     card.className = 'col-lg-4';//'col-12 col-md-12 col-lg-4';
//     card.style = 'margin-bottom: 10px;';

//     let cardClass = document.createElement('div');
//     //cardClass.clasName = 'card';
//     cardClass.setAttribute('class', 'card');
//     //cardClass.style = ': 15rem';

//     let cardBody = document.createElement('div');
//     cardBody.className = 'card-body';

//     let title = document.createElement('h5');
//     title.setAttribute('class', 'card-title');
//     title.setAttribute('innerText', 'Card Title');

//     let title1 = document.createElement('h6');
//     title1.setAttribute('class', 'card-subtitle mb-2 text-muted');
//     //title1.class = 'card-subtitle mb-2 text-muted';
//     title1.innerText = 'Card Subtitle';

//     let cardTitle = document.createElement('p');
//     //cardTitle.class = 'card-text';
//     cardTitle.setAttribute('class', 'card-text');
//     cardTitle.innerText = 'Some quick example text to build on the card title and make up the bulk of the card';

//     let cardLink = document.createElement('a');
//     cardLink.setAttribute('href', '#');
//     cardLink.setAttribute('class', 'card-link');
//     cardLink.setAttribute('innerText', 'Card link');
//     cardLink.innerText = 'Card Subtitle';

//     let cardLink1 = document.createElement('a');
//     cardLink1.setAttribute('href', '#');
//     cardLink1.setAttribute('class', 'card-link');
//     //cardLink1.setAttribute('innerText', 'Card link');
//     cardLink1.innerText = 'Card Subtitle';

//     cardBody.appendChild(title);
//     cardBody.appendChild(title1);
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardLink);
//     cardBody.appendChild(cardLink1);

//     cardClass.appendChild(cardBody);

//     card.appendChild(cardClass);
//     card.appendChild(createBreak);
//     getDiv.appendChild(card);
    
// }

// for (i = 0; i < 6; ++i)
// {
//     displayProducts();
// }

cosmetics.forEach((c) => {
  displayProducts(c);
  console.log(c);
});