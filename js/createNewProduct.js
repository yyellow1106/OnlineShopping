//Ref: https://stackoverflow.com/questions/54868328/html-how-to-automatically-create-bootstrap-cards-from-a-js-file

var cosmetics = ['./../cosmetics-images/1.jpg', './../cosmetics-images/2.jpg', './../cosmetics-images/3.jpg', 
                './../cosmetics-images/4.jpg', './../cosmetics-images/5.jpg', './../cosmetics-images/6.jpg'];

let displayProducts = (c) =>{

    const getDiv =  document.querySelector('.row');

    let cardCol = document.createElement('div');
    cardCol.className = 'col-lg-4';

    let card= document.createElement('div');
    card.className = 'card border-warning mb-3';//'card'; 
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

    // let content1 = document.createElement('p');
    // content1.className = 'card-text';
    // content1.innerText = "Tarte 30% off sale✨✨";

    let link = document.createElement('a');
    link.setAttribute('href', 'https://www.facebook.com/yellow1106');
    link.className = 'btn btn-warning stretched-link';
    link.innerText = 'Explore';
    link.setAttribute('target', '_blank');

    let createBreak = document.createElement('br');

    createCardBody.appendChild(content);
    // createCardBody.appendChild(createBreak);
    //createCardBody.appendChild(content1);
    
    createCardBody.appendChild(link);
    card.appendChild(insertImage);
    card.appendChild(createCardBody);
    cardCol.appendChild(card);
    cardCol.appendChild(createBreak);

    getDiv.appendChild(cardCol);
}

cosmetics.forEach((c) => {
  displayProducts(c);
  console.log(c);
});