var counter = 0;

function getItems() {
    fetch('https://api.myjson.com/bins/qzuzi')
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data[0]);
      localStorage.setItem("cartitems", data);
      console.log("CartItems",  localStorage.getItem("cartitems"));
      var mainDiv = document.querySelector("#cartitem");
      for(var i=0; i < data.length; i++){
          var Div1 = document.createElement("div");
          Div1.setAttribute("class", "col span_1_of_5 custcol");
          Div1.innerHTML = `<div class="cartimgsec"><img src="${data[i].img_url}" style="width: 71%;"></div>
                  <div class="cartitmesec">${data[i].name} </div>
                  <div class="pricesec"><span class="pricetag">&#8377; ${data[i].price}</span> <strike class="actualpricetag">9000 </strike> <span class="discountamttag">64% off</span></div>
                  <div><button class="cartBtn" onclick="addtoCart('`+ data[i].id + `')">Add to cart</button></div>`;
          mainDiv.appendChild(Div1);
          console.log(Div1);
      }
  });
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});
}

function addtoCart(data){
  document.querySelector(".circelposition").style.display = "block";
    console.log("data val", data);
  
  counter = counter + 1;
  localStorage.setItem("Counter", counter)
  var counterSpan = document.querySelector(".cartcounter");
  counterSpan.innerHTML = counter;
  }