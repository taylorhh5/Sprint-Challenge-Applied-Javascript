// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
  

//need to loop through array of articles
//loop again and get specific info


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log(response);
    response.data.articles.bootstrap.forEach (info=> {
        const newArticle = articleCreate (info);
            const articleCon=document.querySelector(".cards-container")
            articleCon.appendChild (newArticle);

        })
    })

      

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then((response) => {
//     console.log(response);
//     response.data.articles.javascript.forEach (info=> {
//         const newArticle = articleCreate (info);
//             const articleCon=document.querySelector(".cards-container")
//             articleCon.appendChild (newArticle);
//         })
//     })

  

//     axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then((response) => {
//         console.log(response);
//         response.data.articles.jquery.forEach (info=> {
//             const newArticle = articleCreate (info);
//                 const articleCon=document.querySelector(".cards-container")
//                 articleCon.appendChild (newArticle);
//             })
//         })
    



function articleCreate (info) {

//define new elements
const divCard = document.createElement('div');
const divHeadline = document.createElement('div');
const divAuthor =document.createElement('div');
const imgC = document.createElement('div');
const imgSrc =document.createElement('img');
const spanName = document.createElement('span');

//structure
divCard.appendChild(divHeadline)
divCard.appendChild(divAuthor)
divAuthor.appendChild(imgC)
imgC.appendChild(imgSrc)
divAuthor.appendChild(spanName)

//class names
divCard.classList.add('card')
divHeadline.classList.add('headline')
divAuthor.classList.add('author')
imgC.classList.add('img-container')



//set text content 
divHeadline.textContent = info.headline;
divAuthor.textContent = info.authorName;
imgSrc.src = info.authorPhoto;





return divCard


}

