function headercomp(){
    var mainDiv = document.querySelector(".header");
    
          var Div1 = document.createElement("div");
          Div1.innerHTML = `<span class="logo">A-Z Shopping</span>
          <div class="header-right">
              <span><i class="fas fa-search"></i></span>
              <span><i class="fas fa-circle circelposition"></i><i class="fas fa-cart-plus"></i></span>
              <span class="cartcounter"></span>
          </div>`;
          mainDiv.appendChild(Div1);
          
          console.log(Div1);
      
}