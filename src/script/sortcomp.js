function hightoLow(){
    var getItems = localStorage.getItem("cartitems");
    getItems.sort(function (a, b) {
        console(a.value - b.value);
        return a.value - b.value;
      });
}