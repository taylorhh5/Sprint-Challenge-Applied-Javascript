// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headCon = document.querySelector(".header-container")
const headerFunction = Header ();
headCon.appendChild (headerFunction);

function Header() {
 
//create elements
const divHeader = document.createElement('div');
const dateSpan = document.createElement('span');
const header2 = document.createElement('h1');
const spanTemp = document.createElement('span');



//structure
divHeader.appendChild(dateSpan)
divHeader.appendChild(header2)
divHeader.appendChild(spanTemp)


//class names
divHeader.classList.add('header')
dateSpan.classList.add('date')
spanTemp.classList.add('temp')



//text content
dateSpan.textContent = "MARCH 28, 2019"
header2.textContent ="Lambda Times"
spanTemp.textContent ="98°"

return divHeader
}