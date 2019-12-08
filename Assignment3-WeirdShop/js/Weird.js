// variables that store a reference to header and section
let header = document.querySelector("header");
let section = document.querySelector("section");
//a variable that stores the Url
let requestURL = "https://yhames1978.github.io/Weird3.json/js/WeirdShop.json";
//creating a new XML object
let request = new XMLHttpRequest();

//opening a new request
request.open("GET", requestURL);

// responseType allows to set the the request to json

request.responseType = "json";
//sending the request
request.send();

// A event handler that listens for the json file to onload
request.onload = function() {
  let weirdShopInc = request.response;
  console.log(weirdShopInc);
  populateHeader(weirdShopInc);
  topProducts(weirdShopInc);
}

//A function to fill in the header
function populateHeader(jsonObj) {


//grabing the storeName from Json object and creating a h1 and appending it to the header
  let headerH1 = document.createElement("h1");
  headerH1.textContent = jsonObj['storeName'];
  header.appendChild(headerH1);
// grabing location and established and making a new paragraph
//to display the information
  let headerPara = document.createElement("p");
  headerPara.textContent = 'Location: ' + jsonObj['location'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}


// topProducts is a function that displays the Products
function topProducts(jsonObj) {


  var topProducts = jsonObj['topProducts'];

  for (let i = 0; i < topProducts.length; i++) {

    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');


// I published a url that so i could grab the data for the images to set the src ,and alt
    img.setAttribute('src', 'https://yhames1978.github.io/WeirdShopImages/images/' + topProducts[i].image);
    img.setAttribute('alt', topProducts[i].image );

    h2.textContent = topProducts[i].name;
    p1.textContent = 'Price: ' + topProducts[i].price;
    p2.textContent = 'Type: ' + topProducts[i].type;
    p3.textContent = 'Description: ' + topProducts[i].description;






    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    section.appendChild(article);


  }

}
