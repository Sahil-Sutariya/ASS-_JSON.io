/*
var json = require('products.json');
function images(products) { // Get data from JSON file
for (var i in products.images) {
    var output = products.images[i].Img1; // Place image in variable output
}
document.getElementById("img").innerHTML=output;};

images();
*/
/*
function fetchdata()
{
    fetch("https://sahil-sutariya.github.io/Ass3JSON.io/products.json")
    .then(response => {
        if(!response.ok){
        throw Error("Error");
    }
    return response.json();
})
    .then(data => {
        const html = data.data.map(products => {
            return `
            <div class="products">
            <p><img src="${products.image}" alt="${products.item}" /></p>
            <p>Item Name: ${products.item}</p>
            <p>Price: ${products.price}</p>
            </div>`;
        })
        .join("");
        document.querySelector("image").insertAdjacementHTML("afterbegin", html);
    })
    // .catch(error => {
    //     console.log(error);
    // })
}

fetchdata();
*/
/*
window.addEventListener("load", function() {

 function getData(){
    URL = "https://sahil-sutariya.github.io/ASS03JSON/products.json"
    // fetch(URL)
    //  .response.json())
    //         .then(success);
    
    //   })//.then((products) => {
    //  //     console.log(products);
    //  // })

     fetch(URL)
            .then(response => response.json())
            .then(success);

     
     

    // .then(products => {
    //      console.log(products);
    //      //document.getElementById("demo").innerHTML = products[0].item;
    //         // return `
    //         // <div class="products">
    //         // <p>Product1: ${products}</p>
    //         // </div>`;    
    // })
}
    function success(products)
    {
        console.log(products);
        let obj ="";
        console.log(products.length);
        for(let i=0; i<products.length; i++)
        {
            console.log("products");
        
            // obj += products[i].item;
            obj += "Item :- " +products[i].item + " Price :- "+ parseInt(products[i].price) + " <img src='" + products[i].images + "'/><br>";
        }
        document.getElementById("demo").innerHTML = obj;
    }
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myarr = JSON.parse(this.products[0]);
//     document.getElementById("demo").innerHTML = myarr[0];
//   }
//   xmlhttp.open("GET", "https://sahil-sutariya.github.io/ASS03JSON/products.json", true);
//   xmlhttp.send();
// };

getData();
})
*/

window.addEventListener("load", function(){

    function getJsonData(){
       const JsonFileURL = "https://sahil-sutariya.github.io/ASS3JSON.io/products.json";
       
       fetch(JsonFileURL)
        .then(resonse => resonse.json())
        .then(data => { addData(data); });
    }

    function addData(data){
    
        let productsContainer = document.getElementById("products");
        
        //console.log(productsContainer);
        
        console.log(data);
        
        //looping through the data 
        for(let i=0; i< data.length; i++){
            let cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.setAttribute("style", "width: 18rem;");
            
                console.log(cardDiv);

            let productImg = document.createElement("img");
                productImg.classList.add("card-img-top");
                productImg.setAttribute("src", data[i].productImage);

            let productCardBody = document.createElement("div");
                productCardBody.classList.add("card-body");

            //<h5 class="card-title">Card title</h5>
            let productCardTitle = document.createElement("h5");
                productCardTitle.classList.add("card-title");    
                productCardTitle.appendChild(document.createTextNode(data[i].productTitle));
   
            //<p class="card-text"> Product Description </p>
            let productDesc = document.createElement("p");
                productDesc.classList.add("card-text");
                productDesc.appendChild(document.createTextNode(data[i].productDescription));
                
            //<a href="#" class="btn btn-primary">Go somewhere</a>    
            let productPurchase = document.createElement("a");
                productPurchase.classList.add("btn");
                productPurchase.classList.add("btn-primary");
                productPurchase.appendChild(document.createTextNode("$"+data[i].productPrice));

            // adding it to the product card body 
            productCardBody.appendChild(productCardTitle);
            productCardBody.appendChild(productImg);
            productCardBody.appendChild(productDesc);
            productCardBody.appendChild(productPurchase);

            cardDiv.appendChild(productCardBody);
            //cardDiv.appendChild(productImg);
            
            productsContainer.appendChild(cardDiv);
            console.log(cardDiv);
        }

    }

    getJsonData();
})

function initMap() {
  const myLatLng = {lat: 44.40011, lng: -79.66634};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,

    //Map opens with this location
    center: { lat: 43.651070, lng: -79.347015 }
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    //Giving name to the main place marked
    title: "Barrie ON",
  });

  function addMarker(cordinates){
    var mark = new google.maps.Marker(
    {
      position: cordinates,
      map: map,
    });
  }

  //More markers have been added to spot the cities...
  addMarker({ lat: 23.033863, lng: 72.585022 });
  addMarker({ lat: 42.746635, lng: -75.770045 });
  addMarker({ lat: 48.864716, lng: 2.349014 });
  addMarker({ lat: 38.897957, lng: -77.036560 });
  addMarker({ lat: 34.052235, lng: -118.243683 });
}
